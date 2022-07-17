export class AdminService {
    public findAdmin(username: string){
        if(username === 'admin')
            return {
                username: 'admin',
                password: 'asdfaf'
            } 
        return false;
    }
}