import { BillController } from "../module/bill/bill.controller";

const router = require('./router');

export class BillRouter{
    private billController: BillController;
    constructor(){
        this.billController = new BillController();
    }

    public initRouter(){
        router.register('GET/bills', (req, res) => this.billController.getAllBill(req, res));
        router.register('GET/bill', (req, res) => this.billController.getBillById(req, res));
        router.register('POST/bill', (req, res) => this.billController.addBill(req, res))
        router.register('DELETE/bill', (req, res) => this.billController.deleteBill(req, res))
    }

}