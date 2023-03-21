import IUser from "../DTO/IUserDTO";

class CreateUserService{    
    public async execute({name, age}: IUser){
        
       return {
        name,
        age: age + 1,
       } 
    }
}

export default new CreateUserService;