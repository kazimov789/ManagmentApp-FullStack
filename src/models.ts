import { EUserRoles } from "./enums";

export interface IRegisterNewUserInfo {
    firstName:string,
    lastName:string,
    email:string,
    age? :number,
    password:string,
    roles: EUserRoles[];
}


export interface ILoginUser {
    email:string,
    password:string
}