import React, { useEffect, useState } from "react";
import Welcomestyle from "../style/components/Welcomestyle";
import Card from "./Card";
//Component
import Container from "./Container";
import MyLoader from "./Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Welcomestyle>
      <div className="image__boud">
        <div className="__head__news__">
          <Link to="/thought">
            <p>Read Thoughts</p>
          </Link>
          <p>
            Thot is a platform that form that allow everyone around the globe to
            share their deep thought and opinion
          </p>
        </div>
      </div>
      <div className="__welcome__">
        <div className="main__stream">
          <hgroup>
            <h6>Thout</h6>
            <p>Simply Made for Sharing thought's</p>
          </hgroup>
          <div className="__button__">
            <button className="cta">
              <Link to="/register">Get Started</Link>
            </button>
            <p>
              Already Have and Account?
              <span>Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </Welcomestyle>
  );
};

export default Home;
