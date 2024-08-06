import React from 'react';
import './Logo.css';
import LogoImage from '../../assets/Disciples du 21ème siècle.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="" className="logo flex">
        <img src={LogoImage} alt="Logo 'Disciples du 21ème du siècle'" />
    </Link>
  )
}

export default Logo;
