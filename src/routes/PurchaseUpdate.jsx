import React from "react";
import { useLocation } from "react-router-dom";

const PurchaseUpdate = () => {
  const location = useLocation();
  console.log(location.state.articleId); // 게시글 번호
  console.log(location.state.title); // 게시글 제목
  return <div>게시글 수정 페이지</div>;
};

export default PurchaseUpdate;
