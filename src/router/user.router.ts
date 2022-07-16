import { UserController } from "../module/users/user.controller";

const router = require('./router');

export class UserRouter{
    private userController: UserController;
    constructor(){
        this.userController = new UserController();
    }

    public initRouter(){
        router.register('GET/user', (req,res) => this.userController.getAllUser(req, res));
    }

}