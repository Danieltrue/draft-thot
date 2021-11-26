import React, { useEffect, useState } from "react";
import Cardstyle from "../style/components/Cardstyle";
import {
  BiDotsHorizontalRounded,
  BiComment,
  BiHeart,
  BiBookmark,
  BiUser,
} from "react-icons/bi";
//time
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { Link } from "react-router-dom";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const Card = (props) => {
  return (
    <Cardstyle>
      <div className="__card__inner">
        <div className="__author__detail">
          <div>
            <figure>
              <img src={props.post.user.profileimage} alt={<BiUser />} />
            </figure>
            <hgroup>
              <h5>{props.post.user.username}</h5>
              <p>{props.post.user.role}</p>
            </hgroup>
          </div>
          <a>
            <BiDotsHorizontalRounded />
          </a>
        </div>
        <div className="body">
          <p>{props.post.body}</p>
        </div>
        <div className="__postfeatures__">
          <a>
            <BiHeart />
          </a>
          <a>
            <BiComment />
          </a>
          <a>
            <BiBookmark />
          </a>
        </div>
      </div>
    </Cardstyle>
  );
};

export default Card;
{
  /* <ReactTimeAgo date={props.article.datepublish} locale="en-US" /> */
}
