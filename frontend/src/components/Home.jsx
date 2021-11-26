import React, { useEffect, useState } from "react";
//Component
import Nav from "./Nav";
import Container from "./Container";
import Homestyle from "../style/components/Homestyle";
import Card from "./Card";
import axios from "axios";
import Masonry from "react-masonry-css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const breakpointColumnsObj = {
    default: 3,
    1100: 0,
    800: 0,
    700: 0,
    500: 1,
  };
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/thot/post");
      await setPosts(data);
      await console.log(posts);
    }
    fetchData();
  }, []);
  return (
    <Homestyle>
      <Nav />
      <Container>
        <div className="Trending">Trending Thought</div>
        <menu>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post) => (
              <Card post={post} />
            ))}
          </Masonry>
        </menu>
      </Container>
    </Homestyle>
  );
};

export default Home;
