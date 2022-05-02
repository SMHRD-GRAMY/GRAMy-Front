import React, { useState } from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import DraftEditor from "../components/DraftEditor";

const PurchaseWrite = () => {
  const [title, setTitle] = useState("");

  const onChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <>
      <Helmet>
        <title>GRAMy | 구매문의 작성</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 작성" />
        <form action="/purchase">
          <div className="w-full h-full flex justify-center">
            <div className="w-[50%] bg-white">
              {/* 게시글 제목 */}
              <div className="border border-gray-400">
                <input
                  className="w-full border-0 focus:ring-0"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              {/* 게시글 내용 작성 */}
              <div>
                <DraftEditor title={title} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PurchaseWrite;
