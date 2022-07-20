import { Authorization } from "../auth/authorization/authorization";
import { BillDto } from "./bill.dto";
import { BillService } from "./bill.service";
export class BillController {

    private billService: BillService;
    private authorService: Authorization;
    constructor(){
      this.billService = new BillService();
      this.authorService = new Authorization();
    }

    public async getAllBill(req, res){
        if(!this.authorService.check(req, res)){
            return;
        }
         try {
            const billAll = await this.billService.getAllBill();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(
                billAll
            ));
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }

    }

    public async getBillById(req, res){

    }

    public async addBill(req, res){
        const bill: BillDto = req.body
        console.log(bill)
        if(Object.keys(bill).length === 0){
            res.writeHead(422, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "body request invalid "
            }));
        }

        try {
            await this.billService.addBill(bill)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: "add book success"
            }));
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }
    }

    public async deleteBill(req, res){
        if(!this.authorService.check(req, res)){
            return;
        }
        const bill_id = req.body.bill_id;
        console.log(bill_id);
        try {
            const result = await this.billService.deleteBill(bill_id);
            if(result){
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: "delete bill success"
                }));
            }
            else{
                res.writeHead(422, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: "bill_id invalid"
                }));
            }
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }
    }

}
