import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();

  const { user_id } = location.state;

  console.log(user_id);

  useEffect(() => {}, []);
  return (
    <>
      <Helmet>
        <title>GRAMy | 회원 정보 수정</title>
      </Helmet>
      <div className="w-full h-full my-14 flex justify-center items-center">
        <div className=" bg-white w-[600px] h-[500px] shadow-lg">
          <div className=" px-10">
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
              회원 정보 수정
            </div>
            <form className="flex flex-col">
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="email"
                disabled
                required
                name="user_id"
                value={user_id}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="비밀번호"
                required
                name="user_pw"
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="비밀번호확인"
                required
                name="user_pw"
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="text"
                placeholder="이름"
                required
                name="user_name"
              />
              <div>
                <input
                  className=" border-b-slate-700 border-b-[1px] w-1/2 h-10 mb-4 mr-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                  type="number"
                  placeholder="전화번호 (-없이 입력)"
                  required
                  // value={input.phone}
                  name="user_phone"
                  // onChange={onChangeInput}
                />
                <button
                  className="h-10 bg-[#132C4D] rounded-md text-white font-bold w-28"
                  // onClick={handlePhoneAuth}
                >
                  인증 하기
                </button>
              </div>
              {/* 성별 */}
              <div className="flex w-80 justify-around mb-6">
                <span className=" text-[#6A7280]">성별 (선택)</span>
                <div className="flex items-center mr-1">
                  <span className="mr-2">남성</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="man"
                    // onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">여성</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="women"
                    // onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">상관없음</span>
                  <input
                    className="focus:ring-2 focus:ring-gray-500 text-gray-500"
                    type="radio"
                    name="user_gender"
                    value="nothing"
                    // onChange={onChangeInput}
                  />
                </div>
              </div>
              <input
                className=" bg-[#132C4D] rounded-md text-white h-10 font-bold cursor-pointer"
                type="submit"
                value="수정하기"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;