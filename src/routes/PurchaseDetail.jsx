import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import WriteComment from "../components/WriteComment";
import axios from "axios";
import { Skeleton } from "@mui/material";

const PurchaseDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const params = useParams();
  const postId = params.id; // 게시글번호, 삭제할 때 사용할 것

  const arr = [1, 1, 1, 1, 1];

  const [comment, setComment] = useState("");

  const location = useLocation();
  const details = location.state.info;

  const handleDelete = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8082/purchase/delete.do", postId);
  };

  useEffect(() => {
    axios
      .post("http://localhost:8082/purchase/content.do", postId, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>GRAMy | {`${details.purchase_title}`}</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 게시판" />
        <div className="w-full h-full flex justify-center">
          <div className="w-[50%] mb-20 bg-white border-2 border-gray-300 shadow-md px-5 rounded-md">
            {/* 게시글 머리 */}
            <div className="py-4">
              <div className="text-[#132C4D] text-sm font-bold mb-1">
                구매 문의
              </div>
              <div className="text-3xl font-semibold">
                {loading ? <Skeleton variant="text" /> : data.purchase_title}
              </div>
              <div className="flex items-center py-2 justify-between">
                <div className="flex items-center">
                  <div className="bg-slate-400 w-10 h-10 rounded-full mr-3" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base">
                      {loading ? <Skeleton variant="text" /> : data.user_id}
                    </span>
                    <span className="text-sm text-gray-400">
                      {loading ? (
                        <Skeleton variant="text" />
                      ) : (
                        data.purchase_date.substring(0, 11)
                      )}
                    </span>
                  </div>
                </div>
                <div className=" text-base text-gray-500">
                  <Link
                    to="update"
                    state={{
                      title: details.purchase_title,
                      content: details.purchase_content,
                    }}
                    className="cursor-pointer hover:border-b hover:border-gray-500"
                  >
                    수정
                  </Link>
                  <span
                    className="ml-2 cursor-pointer hover:border-b hover:border-gray-500"
                    onClick={handleDelete}
                  >
                    삭제
                  </span>
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            {/* 게시글 몸 */}
            <div className="pb-10">
              {loading ? (
                <Skeleton variant="rectangular" width={210} height={118} />
              ) : (
                data.purchase_content
              )}
            </div>
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
            <div className="w-full flex justify-end items-center">
              <button
                className="border border-black py-3 px-10 mb-5 rounded-md font-bold"
                onClick={() => {
                  navigate("/purchase");
                }}
              >
                목록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseDetail;
