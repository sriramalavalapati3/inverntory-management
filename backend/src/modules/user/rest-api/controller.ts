import { FastifyReply, FastifyRequest } from "fastify";
import userService from "./service";
import { userDetails } from "../types";

class userController {
    createUser = async( req: FastifyRequest , res: FastifyReply) => {
try {
    const user = await userService.createUser(req.body as userDetails);
    res.status(201).send(user);
} catch (error) {
    res.status(500).send({ error: "Failed to create user" });
}
    }
}