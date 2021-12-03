import React from "react";
import Writestyle from "../style/components/Writestyle";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";

const Write = () => {
  return (
    <Writestyle>
      <Nav />
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
            <div>
              <button className="cta">Share</button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </Writestyle>
  );
};

export default Write;
