import React from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { useLocation } from "react-router-dom";
import Comments from "../components/Comments";

const PurchaseDetail = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Helmet>
        <title>GRAMy | {`${location.state.info.name}`}</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 게시판" />
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] mb-20 bg-white border border-black shadow-md px-5">
            {/* 게시글 머리 */}
            <div className="py-4">
              <div className="text-[#02C75A] text-sm mb-1">구매 문의</div>
              <div className="text-3xl font-semibold">제목</div>
              <div className="flex items-center py-2 justify-between">
                <div className="flex items-center">
                  <div className="bg-slate-400 w-10 h-10 rounded-full mr-3" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">박종재</span>
                    <span className="text-sm text-gray-400">2022-04-30</span>
                  </div>
                </div>
                <div className=" text-base text-gray-500">
                  <span>수정</span>
                  <span className="ml-2">삭제</span>
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
              {[1, 1, 1, 1].map((_, index) => {
                return <Comments key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseDetail;
