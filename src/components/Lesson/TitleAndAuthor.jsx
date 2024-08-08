import React from "react";

const TitleAndAuthor = ({ title, author }) => {
  return (
    <div className="title-author ">
      <h1 className="title">{title}</h1>

      <p>
        par <span className="font-semibold">{author}</span>{" "}
      </p>
    </div>
  );
};

export default TitleAndAuthor;