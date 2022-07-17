import { AuthService } from "./authenticate.service";

export class AuthController{
    private authService: AuthService
    
    constructor(){
        this.authService = new AuthService();
    }

    //POST auth
    public async authentication(req, res){
        try {
           const token = await this.authService.authenticate(req.body)
           res.writeHead(200, { 'Content-Type': 'application/json' });
           res.end(JSON.stringify({
               token
           }));
        } catch (error) {
            res.writeHead(422, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error
            }));
        }
       
      
    }
}