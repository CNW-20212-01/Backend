import { AdminService } from "../../admin/admin.service";

const jwt = require('jsonwebtoken');

export class AuthService{
    private adminService: AdminService;

    constructor(){
        this.adminService = new AdminService();
    }

    public authenticate({username, password} ) {
        console.log(username + " :  " + password)
        const admin = this.adminService.findAdmin(username)
    
        if (!admin) throw 'Username or password is incorrect';
    
        // create a jwt token that is valid for 7 days
        const token = jwt.sign({ sub: admin.username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPRIRE });
    
        return token;
    }
}

export {jwt}