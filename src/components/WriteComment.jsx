import React from "react";

const WriteComment = () => {
  return (
    <div className="border-2 border-[#0000002c] my-3 py-3 px-3 rounded-md">
      <div className="mb-2 font-semibold text-sm">닉네임</div>
      <div className="flex">
        <textarea
          placeholder="댓글을 남겨보세요."
          className="w-full h-10 resize-none text-sm"
          value=""
        />
        <button className="w-20 bg-[#90C8B4] ml-3 text-sm rounded-md text-white">
          등록
        </button>
      </div>
    </div>
  );
};

export default WriteComment;
