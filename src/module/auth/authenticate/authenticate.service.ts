import { AdminService } from "../../admin/admin.service";
import { bcrypt } from "../../admin/admin.service";

const jwt = require('jsonwebtoken');


export class AuthService{
    private adminService: AdminService;

    constructor(){
        this.adminService = new AdminService();
    }

    public async authenticate({email, password} ) {
        const admin = await this.adminService.findAdmin(email);
        console.log(admin);
        if (!admin) throw 'email or password is incorrect';
        if(!(await bcrypt.compare(password, admin.password))) throw 'email or password is incorrect!'
        // create a jwt token 
        const token = jwt.sign({ sub: admin }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    
        return token;
    }
}

export {jwt}