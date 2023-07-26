import React from "react";
import { useUser } from "../../hooks";

export const UserList: React.FC = () => {
  const { usersDataList } = useUser();

  React.useEffect(() => {
    console.log("UsersData", usersDataList);
  }, []);
  return <div>UserList</div>;
};
