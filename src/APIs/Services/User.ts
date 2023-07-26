import { HttpClient } from "../HTTPClients";


export class UserService extends HttpClient{
    constructor() {
        super("http://localhost:3001");
    }

    async getAllUsers(){
        return await this.get(`users`);
    }

    async getUserById(id:number|string){
        return await this.get(`users/${id}`);
    }
}