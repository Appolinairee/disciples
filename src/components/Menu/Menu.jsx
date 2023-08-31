import React, { useState } from 'react';
import './Menu.css';
import { NavLink, Link } from "react-router-dom";

import {BiHomeAlt2} from 'react-icons/bi';
import {RiPresentationFill} from 'react-icons/ri';
import {BiBookContent} from 'react-icons/bi';
import {IoMdSchool} from 'react-icons/io';
import {BsTelephonePlus} from 'react-icons/bs';
import {MdKeyboardArrowDown} from 'react-icons/md';

const Menu = (  {handleBar, ModeOff} ) => {

    const Links = [
        {
            name: "Accueil",
            link: "/",
            icon: BiHomeAlt2,
        },

        {
            name: "Présentation",
            link: "/presentation",
            icon: RiPresentationFill,
            subMenu: [
                {
                    subname: "Mot du directeur",
                    link: ""
                },
                {
                    subname: "à propos de l'IMSP",
                    link: ""
                },
                {
                    subname: "Administration",
                    link: ""
                },
                {
                    subname: "Bibliothèque",
                    link: ""
                }
            ]
        },

        {
            name: "Formations",
            link: "/formations",
            icon: IoMdSchool,
            subMenu: [
                {
                    subname: "Didactique",
                    link: ""
                },
                {
                    subname: "Mathématiques Fondamentales et Applications",
                    link: ""
                },
                {
                    subname: "Physique Théorique",
                    link: ""
                },
                {
                    subname: "Recherche Opérationnelle et Mathématiques d'aide à la décision",
                    link: ""
                },
                {
                    subname: "Technologie de l'information et de la Communication",
                    link: ""
                },
                {
                    subname: "Classes Préparatoires scientifiques",
                    link: ""
                }
            ]
        },

        {
            name: "Bibliothèques",
            link: "/bibliotheques",
            icon: BiBookContent,
            subMenu: [
                {
                    subname: "Bibliothèque Physique",
                    link: ""
                },

                {
                    subname: "Thèses de Doctorat",
                    link: ""
                },
                {
                    subname: "Mémoires de DEA-Masters",
                    link: ""
                },
            ]
        },

        {
            name: "Nous Contacter",
            link: "/contacts",
            icon: BsTelephonePlus
        },

    ];

    const [subMenu, setSubMenu] = useState(null);

    const handleSubMenu = (linkName) => {
        if(!handleBar)
        setSubMenu(linkName);
    }

    const handleMouseLeave = () => {
        if(!handleBar)
        setSubMenu(null);
    }

  return (
    <ul className="bar flex">
    {
        Links.map( (link, index) => (
            <NavLink key={index} to={link.link} className="link before" onClick={(handleBar && !link.subMenu)? handleBar: null}>

                <li className="flex" onClick={() => setSubMenu(link.name)} onMouseEnter={() => handleSubMenu(link.name)} onMouseLeave={handleMouseLeave}>

                    <div className="navElement flex">
                        <link.icon className='icon' />
                        <p className='flex'> {link.name} {(link.subMenu && !ModeOff) && <MdKeyboardArrowDown className='subicon' />} </p>
                    </div>
                    
                    {
                        link.subMenu && !ModeOff && subMenu === link.name &&
                        <div className="subMenu">
                            <div className="subMenuTop"></div>
                            <div className="subMenuMain after">
                                {
                                    link.subMenu.map((subLink) => (
                                        <p className='after' key={subLink}> {subLink.subname} </p>
                                    ))
                                }
                            </div>
                            
                        </div>
                    }
                </li>

            </NavLink>
        ))
        }
    </ul>
  )
}

export default Menu
