import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import FaceBookLogin from "../components/auth/FaceBookLogin";
import KaKaoLogin from "../components/auth/KaKaoLogin";
import NaverLogin from "../components/auth/NaverLogin";
import { setCookie } from "../components/auth/cookie";

// 로그인

const Login = () => {
  const [input, setinput] = useState({
    userId: "",
    userPw: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "http://localhost:8082/login.do";
    let data = { ...input }; // email, password 넘어감!
    axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          data,
        },
      })
      .then((res, err) => {
        console.log(res);
        console.log(err);
      });
    // window.location.href = "/";
  };

  return (
    <>
      <Helmet>
        <title>GRAMy | 로그인</title>
      </Helmet>
      <div className="w-full h-full my-14 flex justify-center items-center">
        <div className=" bg-white w-[600px] h-[800px] shadow-lg">
          <div className=" px-10">
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
              이메일로 로그인
            </div>
            <form className="flex flex-col">
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none  focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="email"
                placeholder="이메일 주소"
                required
                value={input.id}
                name="userId"
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none  focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="비밀번호"
                required
                value={input.pw}
                name="userPw"
                onChange={onChangeInput}
              />
              <div className="flex  w-full justify-end mb-4 font-thin">
                <Link to="/">비밀번호를 잊어버리셨나요?</Link>
              </div>
              <button
                onClick={handleLogin}
                className=" bg-[#132C4D] rounded-md text-white h-10 font-bold"
              >
                로그인
              </button>
            </form>
            {/* 소셜 아이디로 로그인 */}
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-10">
              소셜 아이디로 로그인
            </div>
            <div className=" flex flex-col items-center w-full h-full mb-20">
              {/* 페이스북 로그인 */}
              <FaceBookLogin />
              {/* 카카오 로그인 */}
              <KaKaoLogin />
              {/* 네이버 로그인 */}
              <NaverLogin />
            </div>
            {/* 회원가입 */}
            <hr className="mb-10" />
            <div className="w-full h-auto">
              <Link to="/join">
                <div className="w-full h-10 bg-white rounded-md text-black font-bold flex justify-center items-center border border-black">
                  회원가입
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
