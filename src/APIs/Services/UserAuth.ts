import {  ILoginUser, IUserInfo } from "../../models";
import { HttpClient } from "../HTTPClients";

export class UserAuthService extends HttpClient{
    constructor() {
        super("http://localhost:3001");
    }

    // async getAllUsers(){
    //     return await this.get(`users`);
    // }

    // async getUserById(id:number|string){
    //     return await this.get(`users/${id}`);
    // }

    async registerUser(body:IUserInfo){
        return await this.post(`register`,body)
    }

    async loginUser(body:ILoginUser){
        return await this.post(`login`,body)
    }
} 