import React from 'react';
// import './ListContent.css'; 

const ListContent = ({ items, title }) => {
    return (
        <div className="list-content">
            {title && <h2 className="list-title">{title}</h2>}
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index} className="list-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContent;