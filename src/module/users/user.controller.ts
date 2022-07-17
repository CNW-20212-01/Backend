import { UserService } from "./user.service";
import { jwt } from "../auth/authenticate/authenticate.service";

export class UserController {

    private userService: UserService;
    constructor(){
      this.userService = new UserService();
    }

    public async getAllUser(req: any, res:any){
      let token = req.headers.authorization;
      
      token = token.slice(7)
      console.log(token);
      try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
      } catch(err) {
        console.log(err)
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(
        await this.userService.getAllUser()
      ));
    }
}