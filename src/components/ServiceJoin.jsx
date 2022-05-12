import React, { useContext } from "react";
import { AppContext } from "../App";

const ServiceJoin = () => {
  const modalContext = useContext(AppContext);

  const onClickServiceJoin = () => {
    modalContext.setServiceModal(true);
  };

  return (
    <div
      className="fixed right-8 bottom-10 cursor-pointer bg-white inline-flex items-center justify-center px-5 py-3 border-transparent text-base hover:bg-gray-600 hover:text-white leading-6 rounded-md text-gray-800 focus:outline-none focus:ring border-2 border-gray-700 transition duration-150 ease-in-out md:text-lg md:px-6 z-10"
      onClick={onClickServiceJoin}
    >
      <span className=" font-bold mr-2">서비스 신청</span>
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
