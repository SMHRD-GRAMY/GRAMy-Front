import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { getCookie } from "../components/auth/cookie";

const AuthHOC = (SpecificComponent, option, adminRoute = null) => {
  // Component : 컴포넌트
  // option : null (누구든 출입 가능) true(로그인 한 유저만 출입가능) false (로그인 한 유저는 출입 불가)

  const LoginContext = useContext(AppContext);

  const AuthenticationCheck = (props) => {
    // 유저 인증 처리
    const handleAuth = () => {
      if (LoginContext.user.username == getCookie("x_auth").user_id) {
        console.log("Hello");
      } else {
        console.log("nohello");
      }
    };

    useEffect(() => {
      handleAuth();
    }, []);

    return <SpecificComponent />;
  };

  return <AuthenticationCheck />;
};

export default AuthHOC;
