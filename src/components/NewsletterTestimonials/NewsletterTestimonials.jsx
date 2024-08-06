import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import NewsletterForm from './NewsletterForm';

import { BsHeart } from 'react-icons/bs';

import './NewsletterTestimonials.css';

const NewsletterTestimonials = () => {
  return (
    <div className='newsTesti'>
        <SectionTitle Title="Faire un don" Paragraphe="Envoyer un message"/>

        <div className="newsTesti__content flex">        
            <div className="donnate">
                <BsHeart className='icon icon1'/>
                <h2>Faire un don</h2>
                <p> Les dons sont une manière simple, concrète et sans engagement d'agir à nos côtés pour la propogation de la grâce de notre sauveur Jésus Christ. <br />
                Faire un don, c'est agir pour le Seigneur.
                </p>

                <div className="overlay" ></div>

                <Button title="Faire un don" Class="button3" Icon={<BsHeart className='icon'/>}/>
            </div>

            <NewsletterForm />
        </div>
    </div>
  )
}

export default NewsletterTestimonials
