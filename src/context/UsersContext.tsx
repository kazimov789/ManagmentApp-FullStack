import React from "react";
import { useService } from "../APIs/Services";
import { useQuery } from "react-query";
import { IUserInfo } from "../models";
import { EQueryKeys } from "../enums";

interface IUserContext {
    usersDataList : IUserInfo[];
}

export const UserContext = React.createContext<IUserContext>(null as any);


export const UserProvider: React.FC<any> = ({ children }) => {
  const { userService } = useService();
  const { data:usersDataList } = useQuery([EQueryKeys.GetAllUsers],()=>{
    return userService.getAllUsers()
  })

  return (
    <UserContext.Provider
      value={{usersDataList:usersDataList?.data}}
    >
      {children}
    </UserContext.Provider>
  );
};
