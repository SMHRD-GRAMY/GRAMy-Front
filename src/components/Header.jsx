import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";
import { getCookie, setCookie } from "./auth/cookie";

const Header = () => {
  const location = useLocation();
  const loginContext = useContext(AppContext);

  let userCookie = getCookie("x_auth");

  const handleLogout = () => {
    setCookie("x_auth", {
      user_id: "",
      user_name: "",
    });
  };

  return (
    <div className=" w-full h-[80px] bg-white flex">
      <div className=" w-[80px] h-[80px]" />
      <div className=" flex justify-between h-[80px] w-full">
        <div className=" flex items-center justify-around w-[450px] h-[80px]">
          <Link to="/" className=" font-bold">
            <img
              src="/img/logo.png"
              alt="로고"
              className=" w-[80px] h-[80px]"
            />
          </Link>
          {location.pathname === "/" ? (
            <Scroll.Link
              to="productInfo"
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              제품 소개
            </Scroll.Link>
          ) : (
            <Link to="/">제품 소개</Link>
          )}
          <Link to="/purchase">구매 문의</Link>
          <Link to="/report">고장 신고</Link>
        </div>
        <div className=" flex items-center justify-evenly w-[310px]">
          {userCookie.user_id !== "" ? (
            <Link to="/profile">
              <div className="flex items-center">
                <div className="rounded-full w-10 h-10 mr-2 flex items-center justify-center border border-green-200 bg-[#90C8B4]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span>{userCookie.user_name}</span>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
                로그인
              </button>
            </Link>
          )}
          {userCookie.user_id !== "" ? (
            <div>
              <button
                className="cursor-pointer hover:underline"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link to="/join">
              <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
                회원가입
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
