import { FastifyInstance } from "fastify";
import UsersController from "./Controllers/UsersController";

export async function userRoutes(app: FastifyInstance) {

    const userController = new UsersController();
    
    app.post('/users', userController.create);
    app.get('/users', userController.index);
    app.put('/users', userController.update);
}

