import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

const Profile = () => {
  const loginContext = useContext(AppContext);
  const { isLogin } = loginContext;
  const params = useParams();

  console.log(params);
  return <div>유저 프로필</div>;
};

export default Profile;
