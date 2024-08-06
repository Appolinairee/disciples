import React from "react";
// import "./Quote.css";

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <blockquote className="quote-text">“{text}”</blockquote>
      {author && <p className="quote-author">— {author}</p>}
    </div>
  );
};

export default Quote;