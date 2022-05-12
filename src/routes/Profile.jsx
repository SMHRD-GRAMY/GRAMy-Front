import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AppContext } from "../App";

const Profile = () => {
  const loginContext = useContext(AppContext);
  const { isLogin } = loginContext;
  const params = useParams();
  const navigate = useNavigate();

  const onClickEditProfile = (e) => {
    e.preventDefault();
    navigate("edit");
  };

  const onClickMyBoard = (e) => {
    e.preventDefault();
    navigate("article");
  };

  console.log(params.id);

  useEffect(() => {}, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <span className=" font-semibold text-3xl">OOO님 어서오세요</span>
      </div>
      <div className="bg-white w-[70%] h-[450px] flex justify-evenly items-center shadow-2xl">
        <Link to="edit">
          <div className="border-2 border-black w-[300px] h-[300px] flex flex-col items-center cursor-pointer">
            <svg
              className="w-[80%] h-[80%]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <span className=" text-3xl">회원 정보 수정</span>
          </div>
        </Link>
        <Link to="article">
          <div className="border-2 border-black w-[300px] h-[300px] flex flex-col items-center cursor-pointer">
            <svg
              className="w-[80%] h-[80%]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className=" text-3xl">게시글 관리</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
