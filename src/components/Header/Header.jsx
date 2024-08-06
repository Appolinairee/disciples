import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SlidesIndicators from '../SlidesIndicators/SlidesIndicators';
import Button from '../Button/Button';

import Image1 from '../../assets/etrechretien.jpeg';
import Image2 from '../../assets/OIP.jpeg';
import Image3 from '../../assets/monpeuple.png';
import Image4 from '../../assets/jesu.jpeg';

import { BsFillPlayFill } from "react-icons/bs";

import { BiMailSend } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';

const Header = () => {

  const Slides = [
    {
        id: 1,
        background: Image1,
        categories: "Disciples du 21ème siècle",
        title: "Notre but",
        description: "Nous cherchons à grandir en maturité spirituelle et à encourager les autres dans leur parcours de foi. " 
    },

    {
        id: 2,
        background: Image2,
        categories: "L'arme du chrétien",
        title: "La prière",
        description: "La prière chrétienne est une pratique profondément importante et significative pour les chrétiens du monde entier." 
    },

    {
        id: 3,
        background: Image3,
        categories: "Amour de Dieu",
        title: "La promesse de Dieu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
    },

    {
        id: 4,
        background: Image4,
        categories: "Qui est Jésus",
        title: "Jésus-Christ",
        description: "Jésus-Christ est le Fils de Dieu incarné, la manifestation de l'amour divin et la source de la grâce à travers Sa vie, Sa mort et Sa résurrection." 
    }
  ];

  const [currentslide, setCurrentslide] = useState(parseInt(Math.random()*Slides.length + 1));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = currentslide === Slides.length ? 1 : currentslide + 1;
      setCurrentslide(nextSlide);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentslide]);

  const handleManual = (n) => {
      if (currentslide <= 0) 
          setCurrentslide(Slides.length);
      else if(currentslide >= Slides.length)
          setCurrentslide(n? 1 : Slides.length-1);
      else
      setCurrentslide(n? currentslide+1: ((currentslide !== 1)? currentslide-1: Slides.length));
  }

  const SlideActive = Slides[currentslide-1];

  const ChangeSlide = (k) => {
    setCurrentslide(k);
  }

  return (
    <div className='section  slides'>

        <section className="headers flex">
            <div className="headerContent"> 
                <h2 style={ {transform: "translateX(0)"} }>{ SlideActive.title } </h2>

                <div className="contentCategorie">
                    <span className='before'> {SlideActive.categories} </span>
                </div>    

                <p>{ SlideActive.description }</p>
      
                <div className="headerDetails__indicators">
                    <div className="headerDetails flex">
                        <Link to="/enseignements">
                            <Button title="Enseignements" Class="button1"/>
                        </Link>

                        <Link to="/apropos">
                            <Button title="Découvrir" Class="button2"  Icon={<BsFillPlayFill />}/>
                        </Link>
                    </div>
            
                    <SlidesIndicators FollowingState={handleManual} ChangeState={ChangeSlide}  CurrentSlide={currentslide} Slides={Slides} />
                </div>

            </div>   

            <div className="headerIllustration__socialMedia flex">
                <div key={SlideActive.id} className="headerIllustration">
                    <img src={SlideActive.background} alt={SlideActive.title} />
                </div>  

                <div className="home__social grid">
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

            
        </section>
    </div>
  )
}

export default Header;