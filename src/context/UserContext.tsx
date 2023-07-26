import React from "react";
import { useService } from "../APIs/Services";
import { ILoginUser } from "../models";
import { useMutation, UseMutateAsyncFunction } from "react-query";
import { AxiosResponse } from "axios";

interface IUserContext {
  mutateLoginUserApplication: UseMutateAsyncFunction<
    AxiosResponse<any, any>,
    unknown,
    ILoginUser,
    unknown
  >;
  isLoginLoading: boolean;
}

export const UserContext = React.createContext<IUserContext>(null as any);

export const UserProvider: React.FC<any> = ({ children }) => {
  const { userService } = useService();

  const { mutateAsync: mutateLoginUserApplication, isLoading: isLoginLoading } =
    useMutation((requestBody: ILoginUser) =>
      userService.loginUser(requestBody)
    );

  return (
    <UserContext.Provider
      value={{ mutateLoginUserApplication, isLoginLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
