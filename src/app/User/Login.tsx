import React from "react";
import { useUser } from "../../hooks";
import { ILoginUser } from "../../models";
import { FadeLoader } from "react-spinners";
import SweetAlert2 from "react-sweetalert2";
import { Button, TextField } from "@mui/material";

const initialLoginValue = {
  email: "",
  password: "",
};

const initalSwalValue = {
  show: true,
  title: "Basic Usage",
  text: "Password or Email is wrong",
};

export const Login: React.FC = () => {
  const { mutateLoginUserApplication, isLoginLoading } = useUser();
  const [loginInputValue, setLoginInputValue] =
    React.useState<ILoginUser>(initialLoginValue);
  const [swalProps, setSwalProps] = React.useState(initalSwalValue);
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLoginInputChanges = React.useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInputValue((previus) => ({ ...previus, [name]: value }));
    },
    []
  );

  const handleLoginFormSumbit = React.useCallback(() => {
    console.log(loginInputValue);

    mutateLoginUserApplication(loginInputValue).catch(() => {
      setSwalProps({
        show: true,
        title: "Danger",
        text: "Email or Password Wrong",
      });
      setIsLogin(true);
    });
  }, [loginInputValue, mutateLoginUserApplication]);

  if (isLogin) {
    setTimeout(() => {
      setIsLogin(false);
    }, 1000);
    return <SweetAlert2 {...swalProps} />;
  }

  return isLoginLoading ? (
    <FadeLoader color="#36d7b7" />
  ) : (
    <div className="login-area">
      <h1>Welcome To Login Page</h1>
      <div className="login-inputs">
        <TextField
          onChange={handleLoginInputChanges}
          type="email"
          placeholder="Please Enter Email Adress"
          name="email"
        />
        <TextField
          onChange={handleLoginInputChanges}
          type="password"
          placeholder="Please Enter Password"
          name="password"
        />
      </div>
      <Button variant="contained" onClick={handleLoginFormSumbit}>
        Login{" "}
      </Button>
    </div>
  );
};
