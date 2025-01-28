import { NextApiRequest, NextApiResponse } from "next";
import { db } from '@app/lib/db';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Set this in .env

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            const user = await db.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                expiresIn: "1h",
            });

            res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            res.status(500).json({ error: "Login failed", details: error });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
