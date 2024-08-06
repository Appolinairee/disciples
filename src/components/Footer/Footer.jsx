import React, {useEffect} from 'react';
import { NavLink, Link } from "react-router-dom";
import './Footer.css';

import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BiMailSend } from 'react-icons/bi';

import {BiHomeAlt2} from 'react-icons/bi';
import {RiPresentationFill} from 'react-icons/ri';
import {BsTelephonePlus} from 'react-icons/bs';

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from '../Logo/Logo';
import Lists from '../Menu/Lists';

const Footer = () => {

    const Links = [
        {
            name: "Accueil",
            link: "/",
            icon: BiHomeAlt2,
        },

        {
            name: "Enseignements",
            link: "/enseignements",
            icon: RiPresentationFill,
        },

        {
            name: "Nous Contacter",
            link: "/contacts",
            icon: BsTelephonePlus
        },

    ];


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
                <Link to="" className="logo flex" data-aos="zoom-in">
                    <Logo />
                </Link>

                <Lists />

            <div className="icons flex">
                <span data-aos="fade-up" data-aos-duration="1000">
                    <Link to="https://www.facebook.com/profile.php?id=61551558165516">
                        <BiLogoFacebook className="icon" />
                    </Link>
                </span>

                <span data-aos="fade-up" data-aos-duration="1500">
                <Link to="https://chat.whatsapp.com/Jgp1tf89CTNIPvVsBoYOBX">
                    <BiLogoWhatsapp className="icon" />
                </Link>
                </span>

                <span data-aos="fade-up" data-aos-duration="2000">
                <Link to="mailto:adandappolinaire229@gmail.com">
                    <BiMailSend className="icon" />
                </Link>
                </span>
            </div>
        </div>

        <div className="footerSub flex before">
            <p> Développé avec <span>&#10084;</span> par les Disciples du 21ème Siècle </p>
            <p>Copyright © 2023. Tous droits réservés</p>
        </div>
    </footer>
  )
}

export default Footer;