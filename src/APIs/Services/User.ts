import {  ILoginUser, IRegisterNewUserInfo } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserService extends HttpClient{
    constructor() {
        super("https://localhost:3001");
    }

    async getAllUsers(){
        return await this.get(`users`);
    }

    async getUserById(id:number|string){
        return await this.get(`users/${id}`);
    }

    async registerUser(body:IRegisterNewUserInfo){
        return await this.post(`register`,body)
    }

    async loginUser(body:ILoginUser){
        return await this.post(`login`,body)
    }
} 