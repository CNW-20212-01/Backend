import { Authorization } from "../auth/authorization/authorization";
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
        
    }

    public async deleteBill(req, res){

    }

}
