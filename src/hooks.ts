import React from "react";
import { UserContext } from "./context/UserContext";

export const useUser = () => React.useContext(UserContext)