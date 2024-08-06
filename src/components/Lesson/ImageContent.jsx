import React from "react";
// import "./ImageContent.css";

const ImageContent = ({ src, description }) => {
  return (
    <div className="image-content">
      <img src={src} alt={description} className="image" />
      <p className="description">{description}</p>
    </div>
  );
};

export default ImageContent;