import IUser from "../DTO/IUserDTO";
import IRepository from "./IRepositoryUsers";

class UserArrayDataBase implements IRepository{
    users:IUser[] = [
        {id: "dssadasd" ,name: "David", email: "davids@gmail.com", password: "1234"}
    ];
    
    public async create({id, name, email, password}:IUser){
        this.users.push({id, name, email, password});
    }

    public async findAll(){
        return this.users.map(user => user);
        
    }
}

export default new UserArrayDataBase;