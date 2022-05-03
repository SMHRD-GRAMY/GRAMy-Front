import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FaceBookLogin = ({ requestLogin }) => {
  return (
    <FacebookLogin
      appId={process.env.FB_APP_ID}
      onProfileSuccess={(response) => {
        requestLogin({
          Provider: ProviderType.Facebook,
          id: response["id"],
        });
      }}
      onFail={() => {
        alert("비정상적인 결과입니다. 다시 시도해주세요!");
      }}
      render={({ onClick }) => (
        <button className="w-auto flex mb-5 cursor-pointer" onClick={onClick}>
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
    ></FacebookLogin>
  );
};

export default FaceBookLogin;
