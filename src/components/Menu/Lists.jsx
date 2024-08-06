import React from 'react';
import { NavLink } from "react-router-dom";
import '../NavBar/NavBar.css';

import {BiHomeAlt2} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';
import {BsTelephonePlus} from 'react-icons/bs';
import {CgOrganisation} from 'react-icons/cg';

const Lists = ({handleBar}) => {

    const Links = [
        {
            name: "Accueil",
            link: "/",
            icon: BiHomeAlt2,
        },

        {
            name: "à propos",
            link: "/apropos",
            icon: FcAbout,
        },

        {
            name: "Enseignements",
            link: "/enseignements",
            icon: CgOrganisation,
        },

        {
            name: "Nous Contacter",
            link: "/contacts",
            icon: BsTelephonePlus
        },

    ];

    return (
        <ul className="bar flex">
        {
            Links.map( (link, index) => (
                <NavLink key={index} to={link.link} className="link before" onClick={handleBar?handleBar: null}>

                    <li className="flex" onClick={handleBar}>

                        <div className="navElement flex">
                            <link.icon className='icon' />
                            <p className='flex'> {link.name} </p>
                        </div>
                        
                    </li>

                </NavLink>
            ))
            }
        </ul>
    )
}

export default Lists
