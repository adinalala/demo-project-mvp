"use client"

import {useAuth} from "@app/providers/auth.provider";
import {redirect} from "next/navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const user = useAuth();

    if (!user) {
        return redirect('/auth');
    }

    return <>{children}</>
}