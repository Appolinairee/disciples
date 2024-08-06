import React, {useEffect} from 'react';
import './AboutSection.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

import AOS from "aos";
import "aos/dist/aos.css";

import AboutImage from '../../assets/discipless.jpeg';
import { BsArrowRight } from 'react-icons/bs';

// Services Icons
import {TbClover} from "react-icons/tb";
import {BsServer} from "react-icons/bs";
import DescriptionLists from '../ChannelsPresentation/DescriptionLists';

const AboutSection = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: true
          });
        AOS.refresh();
      }, []);

      const Services = [
        {
            id: 1,
            icon: TbClover,
            title: "Fondements de notre Foi",
            description: "Notre foi est centrée sur la personne de Jésus-Christ, le Sauveur et Rédempteur de l'humanité. Nous croyons en Sa vie, Sa mort et Sa résurrection."
        },

        {
            id: 2,
            icon: BsServer,
            title: "Partage de l'Évangile",
            description: "Notre communauté ..."
        }
      ];
      
    return (
        <>
        <SectionTitle Title="à propos" Paragraphe="Un Lieu de Foi, d'Unité et de Service"/>
        <section className="aboutSection flex">
            <img src={AboutImage} alt="Image d'illustration de l'entreprise" />

            <div className="aboutContent">
                <DescriptionLists Services={Services} Titre="Les disciples du 21ème siècle" />

                <Button title="Tout Lire" Icon={<BsArrowRight className='icon' />} Class="button3" />
            </div>
        </section>
    </>  
    )
}

export default AboutSection;