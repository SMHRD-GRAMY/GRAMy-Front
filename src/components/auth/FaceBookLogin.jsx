import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FaceBookLogin = ({ requestLogin }) => {
  return (
    <FacebookLogin
      appId={process.env.FB_APP_ID}
      onSuccess={(response) => {
        console.log("Login Success!");
        console.log("id: ", response.id);
      }}
      onFail={(error) => {
        console.log("Login Failed!");
        console.log("status: ", error.status);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!");
        console.log("name: ", response.name);
      }}
      render={({ onClick }) => {
        <button className="w-auto flex mb-5 cursor-pointer" onClick={onClick}>
          <img
            src="img/facebook.png"
            alt="페이스북 아이콘"
            className="w-[50px] h-[50px]"
          />
          <div className="w-[350px] h-[50px] bg-[#517AD5] flex items-center justify-center text-lg font-semibold text-white">
            페이스북 아이디로 로그인
          </div>
        </button>;
      }}
    />
  );
};

export default FaceBookLogin;
