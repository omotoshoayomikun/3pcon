"use client"

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function AuthLayout({ children, }: { children: React.ReactNode; }) {
    const router = useRouter()
    const pathname = usePathname()
    // const [meta, setMeta] = useState({ total: 0, page: 1, pages: 1 });
    // const [tab, setTab] = useState("dashboard");


    return (
        <div className=" min-h-[100vh] px-[var(--shared-px)] py-[var(--shared-py)]">
            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="flex gap-6 overflow-x-auto no-scrollbar">
                    {[
                        { id: "dashboard", label: "Dashboard", link: "/admin/dashboard" },
                        { id: "users", label: "Users", link: "/admin/users" },
                        { id: "events", label: "Events", link: "/admin/events" },
                        { id: "reminder", label: "Send Reminder", link: "/admin/reminder" },
                    ].map((t) => (
                        <button
                            key={t.id}
                            onClick={() => {
                                // 1. Change the tab
                                // setTab(t.id);
                                router.push(t.link)

                            }}
                            className={`py-2.5 cursor-pointer px-2 font-medium transition-all relative whitespace-nowrap flex items-center ${pathname.includes(t.id) ? "text-brand-500" : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {t.label}
                            {/* {t.total !== undefined && t.total > 0 && (
                                <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-50 text-brand-500 text-[10px] font-bold">
                                    {t.total}
                                </span>
                            )} */}
                            {pathname.includes(t.id) && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500" />}
                        </button>
                    ))}
                </div>
            </div>
            {children}
        </div>
    );
}
