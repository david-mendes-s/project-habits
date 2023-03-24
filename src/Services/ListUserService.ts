import UserArrayDataBase from "../repositories/UserArrayDataBase";

class ListUserService{    
    public async execute(){
        return await UserArrayDataBase.findAll();
    }
}

export default new ListUserService;