import React, { useState } from "react";
import LongMenu from "../components/ui/LongMenu";
const Comments = ({ comment, index, length }) => {
  const [mode, setMode] = useState();
  const [editComment, setEditComment] = useState(comment.pr_content);

  const onChangeEditComment = (e) => {
    const { value } = e.target;
    setEditComment(value);
  };

  // TODO : 게시물 별 코멘트 처리해야함
  return (
    <>
      {mode === "edit" ? (
        <div className="flex w-full justify-between">
          <div>
            <div className="font-semibold text-base">{comment.user_name}</div>
            {/* 이 부분 */}
            <textarea
              placeholder="내용을 입력하세요."
              className="w-full h-10 resize-none text-sm border focus:ring"
              value={editComment}
              onChange={onChangeEditComment}
            />
            <div className="text-xs mb-2 text-gray-500">
              {comment.pr_date.substring(0, 11)}
            </div>
          </div>
          <LongMenu comment={comment} setMode={setMode} />
        </div>
      ) : (
        <div className="flex w-full justify-between">
          <div>
            <div className="font-semibold text-base">{comment.user_name}</div>
            <div className="text-sm">{comment.pr_content}</div>
            <div className="text-xs mb-2 text-gray-500">
              {comment.pr_date.substring(0, 11)}
            </div>
          </div>
          <LongMenu comment={comment} setMode={setMode} />
        </div>
      )}

      {index === length - 1 ? null : <hr className="mb-2" />}
    </>
  );
};

export default Comments;
