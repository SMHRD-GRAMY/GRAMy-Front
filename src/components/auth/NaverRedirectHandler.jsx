import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const NaverRedirectHandler = () => {
  const { hostname, protocol } = window.location;
  const navigate = useNavigate();

  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

  const callbackUrl = `${protocol}//${hostname}/naver-login`;
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: CLIENT_ID,
    callbackUrl,
    isPopup: false,
    callbackHandle: true,
  });
  naverLogin.init();

  useEffect(() => {
    const location = window.location.href.split("=")[1];
    const access_token = location.split("&")[0];
    console.log("access_token: " + access_token);

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        // 이 값 핸들링
        const userId = naverLogin.user.getEmail();
        const userName = naverLogin.user.getName();

        console.log("userId: " + userId);
        console.log("userName: " + userName);

        // 핸들링 이후 메인 페이지로 이동
        navigate("/");
      }
    });
  });

  return (
    <div>
      <Skeleton variant="rectangular" width={10000} height={1000} />
    </div>
  );
};

export default NaverRedirectHandler;
