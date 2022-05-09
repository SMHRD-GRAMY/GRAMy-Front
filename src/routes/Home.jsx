import React from "react";
import Helmet from "react-helmet";
import Trail from "../components/ui/Trail";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Banner = styled.div`
  /* background-image: url("img/gramy_bg.png");
  background-repeat: no-repeat;
  background-size: cover; */
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 홈</title>
      </Helmet>
      <div className="w-screen h-auto">
        <Banner className=" w-full h-[660px] px-48 ">
          <div className="px-14">
            <div className="h-36 flex items-center"></div>
            <div className="w-full h-[500px] flex">
              <div className=" mr-40">
                <Trail open={true}>
                  <div className="text-4xl pt-10 mb-5 font-extrabold">
                    <span>재고관리</span>
                  </div>
                  <div className="text-4xl font-extrabold mb-2">
                    <span className="text-[#3E72AF] font-serif">GRAMy </span>
                    <span>에게 맡겨보실래요?</span>
                  </div>
                  <div className="text-lg">
                    GRAMy는 재고 관리를 편하게 할 수 있게 해주는 서비스입니다.
                    <br />
                    언제, 어디서든, 간편하게 재고를 관리해보세요.
                  </div>
                </Trail>
              </div>

              {/* 분리 */}
              <img src="img/boxe.png" alt="박스이미지" />
            </div>
          </div>
        </Banner>
        {/* 제품 특징 */}
        <div className="bg-[#132C4D] h-[400px] w-full px-48">
          <div className="w-full h-full">
            <div className="font-semibold w-full h-auto pt-8 pl-8 text-2xl mb-6 text-white">
              Why GRAMy?
            </div>
            <div className="flex w-full justify-between px-24">
              <div className="flex flex-col items-center">
                <img
                  src="img/realtime.webp"
                  className="w-[200px] h-[200px] drop-shadow-xl"
                />
                <div className="text-xl font-semibold text-[#DAE2EF]">
                  실시간 재고 확인
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="img/graph.png"
                  className="w-[200px] h-[200px] drop-shadow-xl"
                />
                <div className="text-xl font-semibold text-[#DAE2EF]">
                  소모 재고 통계
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="img/alarm.png"
                  className="w-[200px] h-[200px] drop-shadow-xl"
                />
                <div className="text-xl font-semibold text-[#DAE2EF]">
                  재고 부족 알림
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 제품 소개 */}
        <div className="w-full h-[1800px]" id="productInfo">
          <div className="w-full h-[600px] bg-white flex">
            <img src="img/sub_realtime.gif" className=" scale-75" />
            <div className="p-4 py-10">
              <p className=" text-4xl text-[#132C4D] font-semibold mb-2">
                실시간 재고 관리
              </p>
              <p className=" text-xl mb-10">
                GRAMy는 실시간으로 재고를 파악하여 사용자가 언제 어디서든 쉽게
                재고를 확인할 수 있도록 도와줍니다.
              </p>
              <div className="flex justify-around mb-3">
                <img
                  src="img/realtime_img_1.png"
                  className="h-[400px] rounded-2xl hover:scale-110 transition-all shadow-2xl"
                />
                <img
                  src="img/realtime_img_2.png"
                  className="h-[400px] rounded-2xl hover:scale-110 transition-all shadow-2xl"
                />
              </div>
              <span className=" text-slate-400 text-sm">
                * 실제 앱 화면과 다를 수 있습니다.
              </span>
            </div>
          </div>
          <div className="w-full h-[600px] bg-[#F7F8F8] flex justify-between">
            <div className="px-32 py-10">
              <p className=" text-4xl text-[#132C4D] font-semibold mb-2">
                소모 재고 통계
              </p>
              <p className=" text-xl mb-10">
                재고 소모 통계를 확인하여 필요한 만큼만 주문해보세요!
              </p>
              <div className="flex justify-around mb-3">
                <img
                  src="img/graph_img_1.png"
                  className="h-[400px] rounded-2xl hover:scale-110 transition-all shadow-2xl"
                />
              </div>
            </div>
            <img src="img/sub_graph.webp" className=" scale-75" />
          </div>
          <div className="w-full h-[600px] bg-[#27A389] flex">
            <img src="img/sub_alarm.gif" className=" scale-75" />
            <div className="p-4 py-10">
              <p className=" text-4xl text-[#132C4D] font-semibold mb-2">
                재고 부족 알림
              </p>
              <p className=" text-xl mb-10 text-white">
                현재 관리하고 있는 품목의 재고가 부족하면 알림으로 알려줘요!
              </p>
              <div className="flex justify-around mb-3">
                <img
                  src="img/alarm_img_1.png"
                  className="h-[400px] rounded-2xl hover:scale-110 transition-all shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
