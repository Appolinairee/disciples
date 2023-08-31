import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({Title, Paragraphe}) => {
  return (
    <div className="section__title">
        <h2> {Title} </h2>
        <p> {Paragraphe} </p>
    </div>
  )
}

export default SectionTitle
