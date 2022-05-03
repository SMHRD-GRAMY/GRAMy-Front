import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FaceBookLogin = () => {
  const responseFacebook = (response) => {
    const { id, name, email } = response;
    console.log(id); // 토큰 ID << 이거 인증에 사용
    console.log(email); // 페이스북 로그인 한 이메일
    console.log(name); // 사용자 이름
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      autoLoad={false}
      fields="name, email"
      callback={responseFacebook}
      render={(renderProps) => (
        <button
          className="w-auto flex mb-5 cursor-pointer"
          onClick={renderProps.onClick}
        >
          <img
            src="img/facebook.png"
            alt="페이스북 아이콘"
            className="w-[50px] h-[50px]"
          />
          <div className="w-[350px] h-[50px] bg-[#517AD5] flex items-center justify-center text-lg font-semibold text-white">
            페이스북 아이디로 로그인
          </div>
        </button>
      )}
    />
  );
};

export default FaceBookLogin;
