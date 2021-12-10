import React, { useEffect } from "react";
import Writestyle from "../style/components/Writestyle";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";
import LoggedNav from "./LoggedNav";
import { useDispatch, useSelector } from "react-redux";
import { loggedin } from "../action/homeAction.js";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userLoggedIn);
  let { error, loading, userInfo } = userDetail;

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).data.token
      : null;

    dispatch(loggedin(token));

    if (!userInfo || !loading) {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <Writestyle>
      {userInfo ? <LoggedNav user={userInfo.data} /> : <Nav />}
      <div>
        <Container>
          <div className="form__inner">
            <form action="#">
              <div>
                <textarea
                  cols="30"
                  rows="10"
                  maxLength="1000"
                  placeholder="What your Thought"
                ></textarea>
              </div>
              <div className="category">
                <input type="text" placeholder="Search for a Category" />
              </div>
              <div>
                <button className="cta">Share</button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <Footer />
    </Writestyle>
  );
};

export default Write;
