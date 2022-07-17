import { jwt } from "../authenticate/authenticate.service";

export class Authorization{
    public check(req, res): boolean {
        let token: string;
        try{
           token = this.getToken(req);
        }
        catch(err){
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              error: 'Access Denied'
            }));
            return false;
            
        }
       
        try {
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded)
            return true;
            
        } catch(err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              error: 'Invalid Token'
            }));
            console.log(err)
            return false;
        }
    }

    private getToken(req) {
        let token = req.headers.authorization;
        token = token.slice(7)
        console.log(token); 
        return token;
    }
}