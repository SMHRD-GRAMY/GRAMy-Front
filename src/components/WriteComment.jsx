import axios from "axios";
import React, { useContext } from "react";
import { AppContext } from "../App";
import { getCookie } from "./auth/cookie";

const WriteComment = ({ comment, setComment }) => {
  const loginContext = useContext(AppContext);
  let userCookie = getCookie("x_auth");
  let socialUser = JSON.parse(sessionStorage.getItem("socialUser"));

  let { isLogin, setIsLogin } = loginContext;

  const onChangeComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = () => {
    const url = "/"; // 댓글 등록 api 주소ㄴ
    let data = {
      user_id:
        userCookie === undefined || userCookie.user_name === ""
          ? socialUser.email
          : userCookie.user_id,
      comment: comment,
    };
    axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="border-2 border-[#0000002c] my-3 py-3 px-3 rounded-md">
      <div className="mb-2 font-semibold text-sm">
        {/* 작성자 이름 */}
        {isLogin ? (
          userCookie === undefined || userCookie.user_name === "" ? (
            socialUser.name
          ) : (
            userCookie.user_name
          )
        ) : (
          <span>비회원</span>
        )}
      </div>
      <div className="flex">
        {isLogin ? (
          <textarea
            placeholder="댓글을 남겨보세요."
            className="w-full h-10 resize-none text-sm border-0 focus:ring-0"
            value={comment}
            onChange={onChangeComment}
          />
        ) : (
          <textarea
            placeholder="로그인이 필요합니다."
            className="w-full h-10 resize-none text-sm border-0 focus:ring-0"
            disabled
          />
        )}
        {isLogin ? (
          <button
            className="w-20 bg-[#132C4D] ml-3 text-sm rounded-md text-white"
            onClick={handleSubmit}
          >
            등록
          </button>
        ) : (
          <button className="w-20 bg-[#132C4D] ml-3 text-sm rounded-md text-white">
            등록
          </button>
        )}
      </div>
    </div>
  );
};

export default WriteComment;
