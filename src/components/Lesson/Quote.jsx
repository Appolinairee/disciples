import React from "react";
// import "./Quote.css";

const Quote = ({ content }) => {
  return (
    <div className="quote">
      <blockquote className="quote-text">“{content.text}”</blockquote>
      {content.author && <p className="quote-author">— {content.author}</p>}
    </div>
  );
};

export default Quote;