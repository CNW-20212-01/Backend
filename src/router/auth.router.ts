import { AuthController } from "../module/auth/authenticate/authenticate.controller";

const router = require('./router');

export class AuthRouter{
    private authController: AuthController;
    constructor(){
        this.authController = new AuthController();
    }

    public initRouter(){
        router.register('POST/auth', (req,res) => this.authController.authentication(req, res));
    }

}