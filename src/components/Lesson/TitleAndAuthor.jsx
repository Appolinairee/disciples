import React from "react";
// import "./TitleAndAuthor.css";

const TitleAndAuthor = ({ title, author }) => {
  return (
    <div className="title-author">
      <h1 className="title">{title}</h1>
      <p className="author">by {author}</p>
    </div>
  );
};

export default TitleAndAuthor;