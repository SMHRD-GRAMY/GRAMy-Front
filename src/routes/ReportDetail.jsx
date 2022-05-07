import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { Link, useLocation, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import WriteComment from "../components/WriteComment";

const ReportDetail = () => {
  useEffect(() => {}, []);

  const params = useParams();
  const postId = params.id; // 게시글번호

  const arr = [1, 1, 1, 1, 1]; // 댓글에 대한 데이터로 교체되어져야 할 것임

  const [comment, setComment] = useState("");

  const location = useLocation();
  const { title, userId } = location.state.info;

  // 실제 백엔드와 연동할 때 없애고 합쳐야 할 부분
  const progress = location.state.progress;

  const handleDelete = () => {
    // TODO : 게시글 삭제 요청 보내기
  };
  return (
    <>
      <Helmet>
        <title>GRAMy | {`${location.state.info.name}`}</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="고장 신고 게시판" />
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] mb-20 bg-white border-2 border-gray-300 shadow-md px-5 rounded-md">
            {/* 게시글 머리 */}
            <div className="py-4">
              <div className="text-[#132C4D] text-sm font-bold mb-1">
                고장 신고
              </div>
              {progress === "고장접수" ? (
                <div className="text-gray-600 text-sm mb-1">{progress}</div>
              ) : progress === "처리중" ? (
                <div className="text-red-600 text-sm mb-1">{progress}</div>
              ) : (
                <div className="text-green-600 text-sm mb-1">{progress}</div>
              )}
              <div className="text-3xl font-semibold">{title}</div>
              <div className="flex items-center py-2 justify-between">
                <div className="flex items-center">
                  <div className="bg-slate-400 w-10 h-10 rounded-full mr-3" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">{userId}</span>
                    <span className="text-sm text-gray-400">2022-04-30</span>
                  </div>
                </div>
                <div className=" text-base text-gray-500">
                  <Link
                    to="update"
                    state={{
                      title: title,
                      // content : useEffect로 게시글 상세 정보 받아와서 여기다가 처박은 후 수정
                      // 우선은 백엔드 완성 전까지 테스트만
                      content: "<strong>훠킹뻐킹</strong>",
                    }}
                    className="cursor-pointer hover:border-b hover:border-gray-500"
                  >
                    수정
                  </Link>
                  <span className="ml-2 cursor-pointer hover:border-b hover:border-gray-500">
                    삭제
                  </span>
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            {/* 게시글 몸 */}
            <div className="pb-10">게시글게시글</div>
            <hr className="mb-3" />
            <div>
              <div className="font-bold text-lg mb-4">댓글</div>
              {/* 댓글 내용 */}
              {arr.map((_, index) => {
                return (
                  <Comments key={index} index={index} length={arr.length} />
                );
              })}
              {/* 댓글 작성 칸 */}
              <WriteComment comment={comment} setComment={setComment} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetail;
