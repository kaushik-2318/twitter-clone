import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { JWTUser } from "../interfaces";

class JWTService {
    public static generateTokenForUser(user: User) {
        const payload: JWTUser = {
            id: user?.id,
            email: user?.email,
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        return token
    }

    public static decodeToken(token: string) {
        try {
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined");
            }
            return jwt.verify(token, process.env.JWT_SECRET) as JWTUser;
        } catch (error) {
            return null
        }
    }
}

export default JWTService;