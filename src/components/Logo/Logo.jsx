import React from 'react';
import './Logo.css';
import LogoIMSP from '../../assets/logoimsp.png';

const Logo = () => {
  return (
    <div className="logo flex">
        <img src={LogoIMSP} alt="Logo IMSP" />
    </div>
  )
}

export default Logo;
