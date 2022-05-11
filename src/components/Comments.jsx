import React, { useState } from "react";
import LongMenu from "../components/ui/LongMenu";
const Comments = ({ comment, index, length }) => {
  const [mode, setMode] = useState();
  const [editComment, setEditComment] = useState(comment.pr_content);

  const onChangeEditComment = (e) => {
    const { value } = e.target;
    setEditComment(value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  // TODO : 게시물 별 코멘트 처리해야함
  return (
    <>
      {mode === "edit" ? (
        <div className="flex w-full justify-between items-center">
          <div>
            <div className="font-semibold text-base">{comment.user_name}</div>
            {/* 이 부분 */}
            <textarea
              placeholder="내용을 입력하세요."
              className="w-[700px] h-10 resize-none text-sm border-2 border-[#0000002c] focus:ring-0 rounded-md my-2"
              value={editComment}
              onChange={onChangeEditComment}
            />
            <div className="text-xs mb-2 text-gray-500">
              {comment.pr_date.substring(0, 11)}
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative left-[-10px]">
            <button
              className="w-20 py-2 bg-[#132C4D] text-sm rounded-md text-white"
              onClick={handleEdit}
            >
              수정
            </button>
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
