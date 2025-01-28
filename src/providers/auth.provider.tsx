"use client"

import { createContext, useContext, useEffect, useState } from "react";
import {User} from "@app/user/types/user.type";

const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            setUser(data.user || null);
        };

        fetchUser();
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);