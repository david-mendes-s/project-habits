import { merge } from 'lodash';
import IUser from "../DTO/IUserDTO";
import UserArrayDataBase from "../repositories/UserArrayDataBase";

class UpdateUserService{    
    public async execute(data:IUser){
       
        if(!data.id){
            return 'invalid user!'
        }

        const user = await UserArrayDataBase.findById(data.id);

        const margeUser = merge(user, data);

        return margeUser;
    }
}

export default new UpdateUserService;