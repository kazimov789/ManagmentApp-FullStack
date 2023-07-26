import React from "react";
import { useService } from "../APIs/Services";
import { useQuery } from "react-query";

interface IUserContext {
    usersDataList : any;
}

export const UserContext = React.createContext<IUserContext>(null as any);


export const UserProvider: React.FC<any> = ({ children }) => {
  const { userService } = useService();
  const { data:usersDataList } = useQuery(["getAllUsers"],()=>{
    userService.getAllUsers()
  })

  return (
    <UserContext.Provider
      value={{usersDataList:usersDataList}}
    >
      {children}
    </UserContext.Provider>
  );
};
