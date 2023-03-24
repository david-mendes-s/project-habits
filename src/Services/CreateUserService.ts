import { v4 as uuid } from 'uuid';
import UserArrayDataBase from "../repositories/UserArrayDataBase";
import IUser from "../DTO/IUserDTO";

class CreateUserService{    
    public async execute({name, email, password}: IUser){

        const id = uuid();

       await UserArrayDataBase.create({id, name, email, password}); 
 
       return {id, name, email};
    }
}

export default new CreateUserService;