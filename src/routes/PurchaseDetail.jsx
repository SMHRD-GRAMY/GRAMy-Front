import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { Link, useLocation, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import WriteComment from "../components/WriteComment";

const PurchaseDetail = () => {
  // TODO : 게시글 데이터 useEffect로 받아오자!!
  // 로딩은 어쩔수 없다! 스켈레톤 UI로 구현해보자!
  // 무엇을 로딩? -> 댓글, 게시글내용

  useEffect(() => {}, []);

  const params = useParams();
  const postId = params.id; // 게시글번호, 삭제할 때 사용할 것

  const arr = [1, 1, 1, 1, 1];

  const [comment, setComment] = useState("");

  const location = useLocation();
  const { title, userId } = location.state.info;

  const handleDelete = () => {
    // TODO : 게시글 삭제 요청 보내기
  };
  return (
    <>
      <Helmet>
        <title>GRAMy | {`${location.state.info.name}`}</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 게시판" />
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] mb-20 bg-white border-2 border-gray-300 shadow-md px-5 rounded-md">
            {/* 게시글 머리 */}
            <div className="py-4">
              <div className="text-[#02C75A] text-sm mb-1">구매 문의</div>
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

export default PurchaseDetail;
