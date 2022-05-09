import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { getCookie } from "../components/auth/cookie";

const AuthHOC = (SpecificComponent, option, adminRoute = null) => {
  // Component : 컴포넌트
  // option : null (누구든 출입 가능) true(로그인 한 유저만 출입가능) false (로그인 한 유저는 출입 불가)
  const AuthenticationCheck = (props) => {
    // 유저 인증 처리
    const LoginContext = useContext(AppContext);
    let userCookie = getCookie("x_auth");

    const handleAuth = () => {
      console.log(userCookie);
    };

    useEffect(() => {
      handleAuth();
    }, []);

    return <SpecificComponent />;
  };

  return <AuthenticationCheck />;
};

export default AuthHOC;
