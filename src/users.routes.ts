import { FastifyInstance } from "fastify";
import UsersController from "./Controllers/UsersController";
import UserArrayDataBase from "./repositories/UserArrayDataBase";

export async function userRoutes(app: FastifyInstance) {

    const userController = new UsersController();
    
    app.post('/users', userController.create);

    app.get('/users', async (req, res) => {
        return await UserArrayDataBase.findAll();
    })
}

