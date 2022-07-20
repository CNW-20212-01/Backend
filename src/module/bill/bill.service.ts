import { QueryTypes } from "sequelize";
import { dbConnection } from "../../db/model";

export class BillService {
    public async getAllBill(){
        const billAll = await dbConnection.query("SELECT * FROM bill", { type: QueryTypes.SELECT })
        return billAll;
    }

    public async addBill(){

    }
    
    public async getBillById(){

    }

    public async deleteBill(){

    }
}