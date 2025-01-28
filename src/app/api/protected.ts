import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authorization.split(" ")[1];

    try {
        const user = verifyToken(token);
        res.status(200).json({ message: "Protected content", user });
    } catch (error) {
        res.status(401).json({ error: error});
    }
}