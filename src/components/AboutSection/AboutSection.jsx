import React, {useEffect} from 'react';
import './AboutSection.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

import AOS from "aos";
import "aos/dist/aos.css";

import AboutImage from '../../assets/aboutImage.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiWechatChannelsLine } from 'react-icons/ri';

const AboutSection = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease',
            once: true
          });
        AOS.refresh();
      }, []);
        
    return (
        <>
        <SectionTitle Title="Nous Concernant" Paragraphe="Un pôle d'excellence en Afrique"/>
        <section className="aboutSection flex">
            <img src={AboutImage} alt="Image d'illustration de l'entreprise" />

            <div className="aboutContent">
            <div className="aboutStats flex" data-aos="fade-left">
                    <div className="aboutStat flex">
                        <FaUsers className="icon"/>
                        <div>
                            <h3>1 485<span>+</span></h3>
                            <p>Trusted Clients</p>
                        </div>
                    </div>

                    <div className="aboutStat flex">
                        <RiWechatChannelsLine className="icon"/>
                        <div>
                            <h3>3 423<span>+</span></h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </div>

                <h2>L'IMSP un pôle d'excellence en recherche théorique en Afrique</h2>

                <p>Vieux de plus d’une trentaine d’années, l’Institut de Mathématiques et de Sciences Physiques (IMSP) a pour mission première d’encourager et de promouvoir la formation et la recherche en mathématiques, en sciences physiques, en informatique et en sciences de l’ingénierie. </p>

                <Button title="Tout Lire" Icon={<BsArrowRight className='icon' />} Class="button3" />
            </div>
        </section>
    </>  
    )
}

export default AboutSection;