import React, {useState} from 'react';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';
import Logo from '../Logo/Logo';

import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BiCross } from 'react-icons/bi';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci';

import Menu from '../Menu/Menu';

const Navbar = ( { themeFunction, themeState } ) => {

    const [barState, setBarState] = useState(0);

    const handleBar = () => {
        setBarState(barState? 0 : 1);
    }

    const barStyle = {
        transform: (barState)? "translate(0px)":  "translateX(130%)"
    }

  return (
    <nav>
        
        <div id='top' className='nav flex'>
            <div className="navbar flex">
                <Logo />
                <Menu />
            </div>
                
            <div className="navbarContent flex">
                <div className="search">
                    <input type="search" placeholder='Search...' />
                    <BsSearch className='icon' />
                </div>
                    
                <CgMenuRight fill='white' className="icon menuBtn" onClick={ handleBar } />
            </div>
        </div>

        <div className="menu flex" style={ barStyle }>
            <div className="menuOverlay" onClick={ handleBar }></div>

                <div className="menuContent" style={ barStyle }>
                        
                    <Logo />

                    <div className="menuReduceScreen">
                        <Menu handleBar={handleBar} />
                    </div>

                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel risus imperdiet, gravida justo eu. </p>

                    <div className="ulMenu ulMenuContact">
                        <h3>Our Location</h3>
                            
                        <ul className="bar">
                            <li className="flex">
                                <GoLocation  className='icon' />
                                <p>Jalan Raya Uluwatu,Kec. Kuta, Kab. Badung, Bali</p>
                            </li>

                            <Link to="/parc">
                                <li className="flex">
                                    <BsTelephone className='icon'/>
                                    <p>+(62) 800-567-8990</p>
                                </li>
                            </Link>

                            <Link to="/parcglobal">
                                <li className="flex">
                                    <BiMailSend className='icon'/>
                                    <p>Cinomy@mail.com</p>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="ulMenu socialMedia">
                        <h3>Médias Sociaux</h3>
                            
                        <div className="bar flex">
                            <BiLogoTelegram className="icon" />
                            <BiLogoFacebook className="icon" />
                            <BiLogoWhatsapp className="icon" />
                            <BiLogoTwitter className="icon" />
                        </div>

                    </div>

                    <div className="darkmodeBtn flex" onClick={themeFunction}>
                        {
                            (themeState === 1)?<BsFillMoonStarsFill className='icon' />  : <CiLight className='icon'/>
                        } 
                        { (themeState)? "Mode Sombre": "Mode Jour" }   
                    </div>

                    <BiCross className='icon displaybar' onClick={ handleBar }/>
                </div> 
        </div>

     </nav>
  )
}

export default Navbar;