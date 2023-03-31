import z from "zod";


import IUser from "../DTO/IUserDTO";
import IUserUpdateDTO from '../DTO/IUserUpdateDTO';
import CreateUserService from "../Services/CreateUserService";
import ListUserService from "../Services/ListUserService";
import UpdateUserServise from "../Services/UpdateUserServise";

import { FastifyRequest as Request, FastifyReply } from "fastify";

type IUsers = Request<{
    Body: IUser
}>

type IUsersUpdate = Request<{
    Body: IUserUpdateDTO
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

    public async update(request: IUsersUpdate, reply: FastifyReply){
        const data = request.body;

        const user = await UpdateUserServise.execute(data);

        return reply.status(201).send(user);
    }
}

export default UsersController;