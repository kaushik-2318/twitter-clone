import jwt from "jsonwebtoken";
import { prismaClient } from "../client/db";
import { User } from "@prisma/client";

class JWTService {
    public static generateTokenForUser(user: User) {
        const payload = {
            id: user?.id,
            email: user?.email,
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        return token
    }
}

export default JWTService;