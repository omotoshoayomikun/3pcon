"use server";

import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { cookies } from "next/headers";

const SECRET = process.env.SECRET ?? "";
if (!SECRET) throw new Error("SECRET env var is missing");

const key = new TextEncoder().encode(SECRET);
const isProd = process.env.NODE_ENV === "production";


export type SessionPayload = { role: string, user: string };

const cookieCfg = {
    name: "token",
    options: {
        httpOnly: true,
        secure: isProd,                     // HTTPS only in prod
        sameSite: "strict", // cross-site allowed in prod
        path: "/",
    } as const,
    durationMs: 2 * 60 * 60 * 1000, // 2 hours
};

export async function encrypt(payload: JWTPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(key);
}

export async function decrypt(token: string) {
    try {
        const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
        return payload;
    } catch (err) {
        console.error("JWT verify failed:", err);
        return null;
    }
}

export async function createSession({ role, user }: SessionPayload) {
    const expires = new Date(Date.now() + cookieCfg.durationMs);
    const session = await encrypt({ role, user });

    // cookies() is sync
    const store = await cookies()

    store.set(cookieCfg.name, session, { ...cookieCfg.options, expires, maxAge: cookieCfg.durationMs / 1000 });
}

export async function deleteSession() {
    const store = await cookies();
    store.delete(cookieCfg.name); // Match the name!
}

// Optional helper if you read the cookie server-side:
export async function readSessionSync() {
    const store = await cookies()
    const token = store.get(cookieCfg.name)?.value;
    return token ?? null;
}

export async function readSessionPayload(): Promise<SessionPayload | null> {
    const token = (await cookies()).get(cookieCfg.name)?.value;
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
        const typed = payload as Partial<SessionPayload>;

        return {
            role: typed.role ?? "",
            user: typed.user ?? "",
            // api_access_token: typed.api_access_token, // may be undefined
        };
    } catch (err) {
        console.error("JWT verify failed:", err);
        return null;
    }

}