import React, { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const loginContext = useContext(AppContext);
  const { isLogin } = loginContext;
  return <div>유저 프로필</div>;
};

export default Profile;
