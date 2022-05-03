import React from "react";

const KaKaoLogin = () => {
  return (
    <a href="/" className="w-auto flex mb-5">
      <img
        src="img/kakao.jpeg"
        alt="카카오 아이콘"
        className="w-[50px] h-[50px]"
      />
      <div className="w-[350px] h-[50px] bg-[#FFD301] flex items-center justify-center text-lg font-semibold">
        카카오 아이디로 로그인
      </div>
    </a>
  );
};

export default KaKaoLogin;
