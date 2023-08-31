import React, {useEffect} from 'react';
import { NavLink, Link } from "react-router-dom";
import './Footer.css';

import { BiLogoTelegram } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Footer = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: false
          });
        AOS.refresh();
      }, []);

  return (
    <footer className="footer">
        <div className="footerContent flex">
                <div className="logo flex" data-aos="zoom-in">
                    <Logo />
                </div>

            <ul className='flex lists'>
                <Menu ModeOff={1} />
            </ul>

            <div className="icons flex">
                <span data-aos="fade-up" data-aos-duration="500" ><BiLogoTelegram className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="1000"><BiLogoFacebook className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="1500"><BiLogoWhatsapp className="icon" /></span>
                <span data-aos="fade-up" data-aos-duration="2000"><BiLogoTwitter className="icon" /></span>
            </div>
        </div>

        <div className="footerSub flex before">
            <p> Build with love <span>&#10084;</span> by IMSP</p>
            <p>Copyright © 2023. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;