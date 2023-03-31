import { merge } from 'lodash';
import UserArrayDataBase from "../repositories/UserArrayDataBase";
import IUserUpdateDTO from '../DTO/IUserUpdateDTO';

class UpdateUserService{    
    public async execute(data:IUserUpdateDTO){
       
        const user = await UserArrayDataBase.findById(data.id);

        if(!user?.id){
            return 'invalid user!'
        }

        const margeUser = merge(user, data);

        return margeUser;
    }
}

export default new UpdateUserService;