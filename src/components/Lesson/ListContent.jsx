import React from 'react';

const ListContent = ({content}) => {
    return (
        <div className="list-content">
            {content.title && <h2 className="list-title">{content.title}</h2>}
            <ul className="list">
                {content.items.map((item, index) => (
                    <li key={index} className="list-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContent;