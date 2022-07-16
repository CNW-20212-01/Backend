import { QueryTypes } from "sequelize";
import { dbconnection as Connection } from "../../db/model"

export class UserService{
    public async getAllUser(){
        const users = await Connection.query("SELECT * FROM `user`", { type: QueryTypes.SELECT });
        return users;
    }
}