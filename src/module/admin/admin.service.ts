import { QueryTypes } from "sequelize";
import { dbConnection } from "../../db/model";
const bcrypt = require("bcrypt");
export class AdminService {
    public async register(){
        const email: string = process.env.EMAIL;
        const password: string = process.env.PASSWORD;
        console.log(password);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const sql = "INSERT INTO `cnw_websellbook`.`admin` (`email`, `password`) VALUES ('"+ email + "', '" + hashPassword +"');"
        try{
            await dbConnection.query(sql, { type: QueryTypes.INSERT });
        }
        catch(err){
           
        }
        
    }
    public async findAdmin(email: string){
        const result = await dbConnection.query("SELECT * FROM cnw_websellbook.admin WHERE email = '"+ email + "';", { type: QueryTypes.SELECT });
        return result[0];
    }
}

export {bcrypt}