import React from 'react';
// import './Paragraph.css';

const Paragraph = ({ title, text }) => {
    return (
        <div className="paragraph">
            <h2 className="paragraph-title">{title}</h2>
            <p className="paragraph-text">{text}</p>
        </div>
    );
};

export default Paragraph;