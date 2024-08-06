import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import { CgMenuRight } from 'react-icons/cg';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { CiLight } from 'react-icons/ci';
import Menu from '../Menu/Menu';

const Navbar = ({ themeFunction, themeState }) => {
    const [barState, setBarState] = useState(false);

    const handleBar = () => {
      setBarState(!barState);
    };
  
    const barStyle = {
      transform: barState ? 'translate(0px)' : 'translateX(130%)',
    };
  
    return (
      <nav>
        <div id="top" className="nav flex">
          <Logo />
  
          { window.innerWidth > 900? <Menu handleBar={handleBar} />
          :
           barState && <Menu handleBar={handleBar} style={barStyle} />}
  
          {barState && <div className="overlay" onClick={handleBar}></div>}
  
          <div className="darkmodeBtn flex" onClick={themeFunction}>
            {themeState === 1 ? (
              <BsFillMoonStarsFill className="icon" />
            ) : (
              <CiLight className="icon" />
            )}
          </div>
  
          <CgMenuRight fill="white" className="icon menuBtn" onClick={handleBar} />
        </div>
        </nav>
  );
};

export default Navbar;
