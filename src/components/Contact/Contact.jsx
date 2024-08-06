import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import TransitionEffect from '../../components/TransitionEffect/TransitionEffect';
import NewsletterForm from '../NewsletterTestimonials/NewsletterForm';

import { BiMailSend } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BsTelephoneOutbound, BsInstagram, BsBuildings} from 'react-icons/bs';
import {GoClock} from 'react-icons/go';

const Contact = () => {
  return (
    <section className="contact flex">
        <div className="contactForm">
            <h1>Nous Contacter</h1>
            <p className="contactDescription">
            Bienvenue dans notre communauté chrétienne, un lieu où la foi en Jésus-Christ nous unit dans un amour partagé et une mission commune.
            </p>

           <NewsletterForm />
        </div>


        <div className="contactInfos">
            
            <div className="contactElements before">
                <h2>Informations</h2>
                <div className="contactInfo flex">
                    <BiMailSend className="icon" />
                    <Link to="mailto:adandappolinaire229@gmail.com">Disciples du 21ème siècle</Link>
                </div>

                <div className="contactInfo flex">
                    <BsTelephoneOutbound className="icon" />
                    <Link to="tel:">+229 67690696</Link>
                </div>

                <div className="contactInfo flex">
                    <BsBuildings className='icon' />
                    <Link>Dans la commune d'Avrankou</Link>
                </div>

                <div className="contactInfo flex">
                    <GoClock className='icon' />
                    <Link>Disponible pour vous 24H / 24</Link>
                </div>
            </div>

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
        </div>

        <TransitionEffect />

    </section>
  )
} 
    
export default Contact;
