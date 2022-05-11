import React from "react";
import LongMenu from "../components/ui/LongMenu";
const Comments = ({ index, length }) => {
  // TODO : 게시물 별 코멘트 처리해야함
  return (
    <>
      <div className="flex w-full justify-between">
        <div>
          <div className="font-semibold text-base">{index.user_name}</div>
          <div className="text-sm">{index.pr_content}</div>
          <div className="text-xs mb-2 text-gray-500">{index.pr_date}</div>
        </div>
        <LongMenu />
      </div>
      {index === length - 1 ? null : <hr className="mb-2" />}
    </>
  );
};

export default Comments;
