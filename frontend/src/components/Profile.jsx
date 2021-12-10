import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedin } from "../action/homeAction.js";
import Profilestyle from "../style/components/Profilestyle.js";
import Container from "./Container.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.userLoggedIn);
  let { error, loading, userInfo } = userDetail;

  console.log(userInfo ? userInfo.data : "");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).data.token
      : null;

    dispatch(loggedin(token));
    if (!userInfo) {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <Profilestyle
      image={
        userInfo && userInfo.data.profileimage !== ""
          ? userInfo.data.profileimage
          : ""
      }
    >
      <Container>
        <div className="profile_inner">
          <div className="profile_image">
            <div className="image__inner">
              <p>{userInfo && userInfo.data.username}</p>
            </div>
          </div>
        </div>
      </Container>
    </Profilestyle>
  );
};

export default Profile;
