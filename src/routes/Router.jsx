import React, { useContext } from "react";
import { AppContext } from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import Modal from "../components/Modal";
import Purchase from "./Purchase";
import Report from "./Report";
import PurchaseDetail from "./PurchaseDetail";
import PurchaseWrite from "./PurchaseWrite";
import KaKaoRedirectHandler from "../components/auth/KaKaoRedirectHandler";
import NaverRedirectHandler from "../components/auth/NaverRedirectHandler";
import ReportDetail from "./ReportDetail";
import ReportWrite from "./ReportWrite";
import ServiceJoin from "../components/ServiceJoin";
import ServiceModal from "../components/ui/ServiceModal";
import AuthHOC from "../HOC/AuthHOC";

const Router = () => {
  const ModalContext = useContext(AppContext);

  return (
    <>
      {ModalContext.terms.modal1 ? <Modal modalId="modal1" /> : null}
      {ModalContext.terms.modal2 ? <Modal modalId="modal2" /> : null}
      {ModalContext.terms.modal3 ? <Modal modalId="modal3" /> : null}
      {ModalContext.serviceModal ? <ServiceModal /> : null}
      {ModalContext.serviceModal ? null : <ServiceJoin />}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase/:id" element={<PurchaseDetail />} />
          <Route path="/purchase/write" element={<PurchaseWrite />} />
          <Route
            path="/purchase/:id/update"
            element={<PurchaseWrite mode="edit" />}
          />
          <Route path="/report" element={<Report />} />
          <Route path="/report/:id" element={<ReportDetail />} />
          <Route path="/report/write" element={<ReportWrite />} />
          <Route
            path="/report/:id/update"
            element={<PurchaseWrite mode="edit" />}
          />
          <Route
            path="/oauth/callback/kakao"
            element={<KaKaoRedirectHandler />}
          />
          <Route
            path="/oauth/callback/naver"
            element={<NaverRedirectHandler />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
