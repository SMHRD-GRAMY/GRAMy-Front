import React from "react";
import LongMenu from "../components/ui/LongMenu";
const Comments = ({ comment, index, length }) => {
  // TODO : 게시물 별 코멘트 처리해야함
  return (
    <>
      <div className="flex w-full justify-between">
        <div>
          <div className="font-semibold text-base">{comment.user_name}</div>
          <div className="text-sm">{comment.pr_content}</div>
          <div className="text-xs mb-2 text-gray-500">
            {comment.pr_date.substring(0, 11)}
          </div>
        </div>
        <LongMenu comment={comment} />
      </div>
      {index === length - 1 ? null : <hr className="mb-2" />}
    </>
  );
};

export default Comments;
