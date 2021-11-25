import React, { useEffect, useState } from "react";
//Component
import Nav from "./Nav";
import Container from "./Container";
import Homestyle from "../style/components/Homestyle";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
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
          {posts.map((post) => (
            <Card post={post} />
          ))}
        </menu>
      </Container>
    </Homestyle>
  );
};

export default Home;
