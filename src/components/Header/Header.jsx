import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SlidesIndicators from '../SlidesIndicators/SlidesIndicators';
import Button from '../Button/Button';

import Background from '../../assets/programme1.jpg';
import { BsFillPlayFill } from "react-icons/bs";

import { BiMailSend } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';

const Header = () => {

  const Slides = [
    {
        id: 1,
        background: Background,
        categories: "Sciences Informatiques",
        title: "Net Box TV",
        description: "Avec Net Box TV, pour tous les goûts, pour toutes les langues. Avec plus de 35.000 chaînes, voyageons dans le temps!" 
    },

    {
        id: 2,
        background: Background,
        categories: "Sciences Informatiques",
        title: "The Future",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
    },

    {
        id: 3,
        background: Background,
        categories: "Sciences Informatiques",
        title: "With Family",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
    },

    {
        id: 4,
        background: Background,
        categories: "Sciences Informatiques",
        title: "Let's go",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
    }
  ];

  const [currentslide, setCurrentslide] = useState(parseInt(Math.random()*Slides.length + 1));

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
                <h2 style={ {transform: "translateX(0)"} }>{ SlideActive.title } {currentslide}</h2>

                <div className="contentCategorie">
                    <span className='before'> {SlideActive.categories} </span>
                </div>    

                <p>{ SlideActive.description }</p>
      
                <div className="headerDetails__indicators">
                    <div className="headerDetails flex">
                        <Link to="/decodeur">
                            <Button title="Se connecter" Class="button1"/>
                        </Link>

                        <Link to="/abonnement">
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
                    <p className='flex'>
                        <BiMailSend className='icon' />
                        <span className='before'>Send Mail</span>
                    </p>
                    <p className='flex'>
                        <BiLogoLinkedin className='icon' />
                        <span className='before'>LinkedIn</span>
                    </p>
                    <p className='flex'>
                        <BiLogoFacebook className='icon' />
                        <span className='before'>Facebook</span>
                    </p>
                </div>
            </div>

            
        </section>
    </div>
  )
}

export default Header;