import React from "react";
import LongMenu from "../components/ui/LongMenu";
const Comments = ({ index, length }) => {
  console.log(index);
  return (
    <>
      <div className="flex w-full justify-between">
        <div>
          <div className="font-semibold text-base">공돌이</div>
          <div className="text-sm">라즈베리파이 4 정석</div>
          <div className="text-xs mb-2 text-gray-500">2022-04-30</div>
        </div>
        <LongMenu />
      </div>
      {index === length - 1 ? null : <hr className="mb-2" />}
    </>
  );
};

export default Comments;
