import { NextRequest, NextResponse } from "next/server";
import { createSession } from "../../../../../config/session";

export const POST = async (request: NextRequest) => {
    try {

        const { username, password } = await request.json();
        const CheckUsername = process.env.USER_NAME;
        const CheckPassword = process.env.PASSWORD;

        console.log(CheckUsername, CheckPassword)

        if (CheckUsername !== username || CheckPassword !== password) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
        }

        await createSession({ role: "admin", user: username })

        return NextResponse.json({ message: "Authenticated successfully" }, { status: 200 });


    } catch (err: unknown) {
        const errorMsg =
            err instanceof Error ? err.message : "Unexpected error occurred";

        return NextResponse.json(
            { message: errorMsg },
            {
                status: 500,
            }
        );
    }
}