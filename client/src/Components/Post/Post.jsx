import React from "react";
import moment from "moment"
import "./Post.css";
import { Link } from "react-router-dom";

function Post({ title, image, id, summary, owner, createdAt }) {
  let timeago = moment(createdAt).fromNow()

    if(timeago === "a few seconds ago"){
      timeago = "Just now"
    }

  return (
    <Link to={`/post/${id}`}>
    <div className="post">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="info">
          <p className="author">{owner}</p>
          <p className="time">{timeago}</p>
          {/* <p><ReactTimeAgo date={time} locale="en-US"/></p> */}
        </div>
        <div>
          <p className="description">{summary}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Post;
