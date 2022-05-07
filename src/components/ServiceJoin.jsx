import React, { useContext } from "react";
import { AppContext } from "../App";

const ServiceJoin = () => {
  const modalContext = useContext(AppContext);

  const onClickServiceJoin = () => {
    modalContext.setServiceModal(true);
  };

  return (
    <div
      className="fixed right-8 bottom-10 h-12 w-32 bg-white z-40 rounded-md flex justify-center items-center shadow-xl cursor-pointer border-2 border-black hover:scale-125 active:scale-100 transition-all"
      onClick={onClickServiceJoin}
    >
      <span className=" font-bold text-black mr-2">서비스 신청</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    </div>
  );
};

export default ServiceJoin;
