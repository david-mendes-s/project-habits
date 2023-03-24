import IUser from "../DTO/IUserDTO";

export default interface IRepository {
    create({id, name, email, password}:IUser):Promise<void>;
    findAll():Promise<IUser[]>;
    findById(id:string):Promise<IUser | undefined>;
}