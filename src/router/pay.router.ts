import { AuthController } from "../module/auth/authenticate/authenticate.controller";
import { PaymentController } from "../module/payment/payment.controller";

const router = require('./router');

export class PayRouter{
    private payController: PaymentController;
    constructor(){
        this.payController = new PaymentController();
    }

    public initRouter(){
        router.register('POST/pay', (req,res) => this.payController.pay(req, res));
    }
}