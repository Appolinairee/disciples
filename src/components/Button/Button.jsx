import React from 'react';
import './Button.css';

const Button = ({title, Class, Icon}) => {
  return (
    <button className={`flex ${Class}`}> 
        {title} 
        { Icon && Icon } 
    </button>
  )
}

export default Button
