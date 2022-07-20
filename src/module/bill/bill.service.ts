import { QueryTypes } from "sequelize";
import { dbConnection } from "../../db/model";
import { BillDto, BillDtoDetail } from "./bill.dto";
import { v4 as uuidv4} from "uuid";

export class BillService {
    public async getAllBill(){
        const billAll = await dbConnection.query("SELECT * FROM bill", { type: QueryTypes.SELECT })
        return billAll;
    }

    public async addBill(bill: BillDto){
        const bill_id = uuidv4()
        const date_bill = new Date()
        const phone_number = bill.phone_number
        const name = bill.name
        let money = bill.total_money
        const total_money = money.toString()
        const address = bill.address
        const sql = 
            "INSERT INTO `bill` (`bill_id`, `date_bill`, `phone_number`, `name`, `total_money`, `address`) VALUES" +
            " (:bill_id, :date_bill, :phone_number, :name, :total_money, :address)"
        await dbConnection.query(sql,  {
            replacements: { bill_id, date_bill, phone_number, name, total_money, address },
            type: QueryTypes.INSERT
        })

        bill.bookList.forEach(async (bill_detail) => {
            await this.addBillDetail(bill_detail.book_id, bill_id, bill_detail.quantity)
        });
    }
    
    public async getBillById(){

    }

    public async deleteBill(bill_id: string){
        const checkBillId = await this.checkBillId(bill_id);
        if(checkBillId){
            const sql1 = "DELETE FROM `bill_detail` WHERE (`bill_id` = :bill_id);"
            await dbConnection.query(sql1, {
                replacements: { bill_id },
                type: QueryTypes.DELETE
            })
            const sql2 = "DELETE FROM `bill` WHERE (`bill_id` = :bill_id);"
            await dbConnection.query(sql2, {
                replacements: { bill_id },
                type: QueryTypes.DELETE
            })
            return true
        }
        return false;
    }

    private async addBillDetail(book_id: string, bill_id: string, quantity: number){
        const bill_detail_id = uuidv4()
        const quantityQue = quantity.toString()
        const sql = 
            "INSERT INTO `bill_detail` (`bill_detail_id`, `bill_id`, `book_id`, `quantity`) VALUES " +
            "(:bill_detail_id, :bill_id, :book_id, :quantityQue)"
        await dbConnection.query(sql, {
            replacements: { bill_id, book_id, bill_detail_id, quantityQue },
            type: QueryTypes.INSERT
        })
    }
    private async checkBillId(bill_id: string){
        const result = await dbConnection.query("Select * FROM `bill` WHERE (`bill_id` = '"+ bill_id +"')", {type: QueryTypes.SELECT});
        return result.length > 0
    }
}