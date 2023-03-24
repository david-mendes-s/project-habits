import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";

import IUser from "../DTO/IUserDTO";
import CreateUserService from "../Services/CreateUserService";
import ListUserService from "../Services/ListUserService";
import UpdateUserServise from "../Services/UpdateUserServise";


type IUsers = FastifyRequest<{
    Body: IUser
}>

class UsersController {

    public async create(request: IUsers, reply: FastifyReply) {

        const { name, email, password } = request.body;

        const user = await CreateUserService.execute({name, email, password});
        
        return reply.status(201).send(user);
    }

    public async index(request: IUsers, reply: FastifyReply){
        const users = await ListUserService.execute();

        return reply.status(200).send(users);
    }

    public async update(request: IUsers, reply: FastifyReply){
        const data = request.body;

        const user = await UpdateUserServise.execute(data);

        return reply.status(201).send(user);
    }
}

export default UsersController;