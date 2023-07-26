import { UserService } from "./User";

export const useService = () =>{
    const services = {
        userService: new UserService()
    };

    return services;
};