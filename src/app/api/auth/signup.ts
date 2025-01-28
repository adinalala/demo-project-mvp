import { NextApiRequest, NextApiResponse } from "next";
import { db } from '@app/lib/db';
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password, name } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await db.user.create({
                data: { email, password: hashedPassword, name },
            });

            res.status(201).json({ message: "User created successfully", user });
        } catch (error) {
            res.status(500).json({ error: "User creation failed", details: error });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}