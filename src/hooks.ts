import React from "react";
import { UserAuthContext } from "./context/UserAuthContext";
import {UserContext} from './context/UsersContext'

export const useUserAuthicantion = () => React.useContext(UserAuthContext)
export const useUser = () => React.useContext(UserContext);