import React, { useRef } from 'react';
import './NewsletterTestimonials.css';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';

import { BsFillPlayFill } from "react-icons/bs";

const NewsletterForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_glpp287', 'template_0i2sdir', form.current, 'to84S6Kpdtu2qY13x')
      e.target.reset();
    };

    return (
      <div className="newsletter">
        <form ref={form} onSubmit={sendEmail}>
            <div className="input names">
                <label htmlFor="name">Nom et Prénom</label>
                <input name='name' type="text" placeholder='Votre Nom et Prénom' id='name' autoFocus/> <br />
            </div>
            <div className="input names">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Entrer votre email' id='email' name='email' /> <br />
            </div>
            <div className="input">
                <label htmlFor="messages">Message</label>
                <textarea name="message" id="messages" cols="30" type="email" placeholder='Votre Message'></textarea>
            </div>
        
            <Button title="Envoyer" Class="button2" type="submit" Icon={<BsFillPlayFill />}/>
        </form>
    </div>
    )
  }

export default NewsletterForm
