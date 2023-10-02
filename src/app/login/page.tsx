import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UMS | Login",
};
const Login = () => {
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};

export default Login;
