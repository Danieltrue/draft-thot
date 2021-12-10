import React, { useEffect, useState } from "react";
//Component
import Nav from "./Nav";
import LoggedNav from "./LoggedNav";
import Container from "./Container";
import Homestyle from "../style/components/Homestyle";
import Card from "./Card";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { loggedin } from "../action/homeAction.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    800: 0,
    700: 0,
    500: 1,
  };

  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userLoggedIn);
  let { error, loading, userInfo } = userDetail;

  console.log(userDetail);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).data.token
      : null;

    dispatch(loggedin(token));
  }, [dispatch]);

  return (
    <Homestyle>
      {userInfo ? <LoggedNav user={userInfo.data} /> : <Nav />}
      <Container>
        <div className="Trending">Trending Thought</div>
        <menu>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {/* {posts.map((post) => (
              <Card post={post} />
            ))} */}
          </Masonry>
        </menu>
      </Container>
    </Homestyle>
  );
};

export default Home;
