import { UserService } from "./user.service";

export class UserController {

    private userService: UserService;
    constructor(){
      this.userService = new UserService();
    }

    public async getAllUser(req: any, res:any){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(
          await this.userService.getAllUser()
        ));
    }
}