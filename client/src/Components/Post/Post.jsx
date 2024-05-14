import React from "react";
import ReactTimeAgo from 'react-time-ago'
import "./Post.css";
import { Link } from "react-router-dom";

function Post({ title, image, id, summary, owner, createdAt }) {
    //   const parsedDate = new Date(Date.parse(createdAt));

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
          <p className="time">{createdAt}</p>
          {/* Last seen: <ReactTimeAgo date={createdAt} locale="en-US"/> */}
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
