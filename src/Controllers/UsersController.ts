import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";

import IUser from "../DTO/IUserDTO";
import CreateUserService from "../Services/CreateUserService";

type IUsers = FastifyRequest<{
    Body: IUser
}>

class UsersController {

    public async create(request: IUsers, reply: FastifyReply) {

        const { name, email, password } = request.body;

        const user = await CreateUserService.execute({name, email, password});
        
        return reply.status(200).send(user);
    }
}

export default UsersController;