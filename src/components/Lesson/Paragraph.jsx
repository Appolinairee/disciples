import React from "react";
import ImageContent from "./ImageContent";

const Paragraph = ({ content }) => {
  return (
    <div className="paragraph">
      {content.title && <h2 className="paragraph-title">{content.title}</h2>}

      {content.text && <p className="paragraph-text">{content.text}</p>}
      
      {content.image && (
        <ImageContent src={content.image} alt={content.title} />
      )}
    </div>
  );
};

export default Paragraph;
