import React from "react";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 홈</title>
      </Helmet>
      <div className="w-screen h-auto">
        <div className=" w-full h-[660px] px-48 bg-gradient-to-l from-gray-300 ">
          <div className="px-14">
            <div className="h-36 flex items-center">
              <span className="text-xl text-gray-400">GRAMy</span>
            </div>
            <div className="w-full h-[500px] flex">
              <div className=" mr-40">
                <div className="text-4xl pt-10 mb-5 font-extrabold">
                  <span>재고관리</span>
                </div>
                <div className="text-4xl font-extrabold mb-2">
                  <span className="text-[#90C8B4] font-serif">GRAMy </span>
                  <span>에게 맡겨보실래요?</span>
                </div>
                <div className="text-lg">
                  GRAMy는 재고 관리를 편하게 할 수 있게 해주는 서비스입니다.
                  <br />
                  언제, 어디서든, 간편하게 재고를 관리해보세요.
                </div>
              </div>
              {/* 분리 */}
              <img src="img/boxe.png" alt="박스이미지" />
            </div>
          </div>
        </div>
        {/* 제품 특징 */}
        <div className="bg-[#90C8B4] h-[365px] w-full px-48">
          <div className="w-full h-full">
            <div className="font-semibold w-full h-auto pt-8 pl-8 text-2xl mb-6 text-gray-800">
              Why GRAMy?
            </div>
            <div className="flex w-full justify-between px-24">
              <div className="flex flex-col items-center">
                <img src="img/realtime.webp" className="w-[200px] h-[200px]" />
                <div className="text-xl">실시간 재고 확인</div>
              </div>
              <div className="flex flex-col items-center">
                <img src="img/graph.png" className="w-[200px] h-[200px]" />
                <div className="text-xl">소모 재고 통계</div>
              </div>
              <div className="flex flex-col items-center">
                <img src="img/alarm.png" className="w-[200px] h-[200px]" />
                <div className="text-xl">재고 부족 알림</div>
              </div>
            </div>
          </div>
        </div>
        {/* 제품 소개 */}
        <div className="w-full h-[1500px]" id="productInfo">
          <div>실시간 재고 관리</div>
          <div>소모 재고 통계</div>
          <div>재고 부족 알림</div>
        </div>
      </div>
    </>
  );
};

export default Home;
