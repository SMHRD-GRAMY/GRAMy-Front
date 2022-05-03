import React from "react";

const NaverLogin = () => {
  return (
    <a href="/" className="w-auto flex">
      <img
        src="img/naver.png"
        alt="네이버 아이콘"
        className="w-[50px] h-[50px]"
      />
      <div className="w-[350px] h-[50px] bg-[#20CE00] flex items-center justify-center text-lg font-semibold text-white">
        네이버 아이디로 로그인
      </div>
    </a>
  );
};

export default NaverLogin;
