import React, { useState } from 'react';
import './Menu.css';
import Lists from './Lists';
import { Link } from 'react-router-dom';

import { BiMailSend } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BiCross } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import Button from '../Button/Button';

const Menu = (  {handleBar, style} ) => {

  return (
    <div className="nav_menu_section flex" style={style}>

        <BiCross className='icon displayBar' onClick={handleBar}/>
    
        <Lists handleBar={handleBar} />

        <div className="icons flex">
          <Link to="https://www.facebook.com/profile.php?id=61551558165516">
            <BiLogoFacebook className="icon" />
          </Link>

          <Link to="https://chat.whatsapp.com/Jgp1tf89CTNIPvVsBoYOBX">
            <BiLogoWhatsapp className="icon" />
          </Link>

          <Link to="mailto:adandappolinaire229@gmail.com">
            <BiMailSend className="icon" />
          </Link>
        </div>

        <Link to="https://chat.whatsapp.com/Jgp1tf89CTNIPvVsBoYOBX">
          <Button title="Faire un don" Class="button3" Icon={<BsHeart className='icon'/>}/>
        </Link>
    </div>
  )
}

export default Menu
