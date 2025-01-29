import React from "react";
import Form from "./SignUPcomponent/form";
import LoginHeader from "../loginPage/loginCompontnets/header";
const SignUPForm = () => {
  return (
    <>
    <div className="top-0 sticky">
    <LoginHeader/>
    </div>
    <Form/>
    </>
  );
};
export default SignUPForm;