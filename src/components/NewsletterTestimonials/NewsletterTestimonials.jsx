import SectionTitle from '../SectionTitle/SectionTitle';
import Author1 from '../../assets/user.png';
import Button from '../Button/Button';
import { BsFillPlayFill } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './NewsletterTestimonials.css';

import { EffectCards } from 'swiper/modules';

const NewsletterTestimonials = () => {

    const Testimonials =[
        {
            image: Author1,
            fullname: "John Doe",
            job: "Data-Scientist",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga sequi rem optio delectus eveniet saepe voluptates sapiente. Excepturi nulla veniam, quia, delectus sunt, fugiat maxime voluptatibus accusantium" 
        },
        {
            image: Author1,
            fullname: "John Doe",
            job: "Data-Scientist",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga sequi rem optio delectus eveniet saepe voluptates sapiente. Excepturi nulla veniam, quia, delectus sunt, fugiat maxime voluptatibus accusantium" 
        },
        {
            image: Author1,
            fullname: "John Doe",
            job: "Data-Scientist",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga sequi rem optio delectus eveniet saepe voluptates sapiente. Excepturi nulla veniam, quia, delectus sunt, fugiat maxime voluptatibus accusantium" 
        },
        {
            image: Author1,
            fullname: "John Doe",
            job: "Data-Scientist",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga sequi rem optio delectus eveniet saepe voluptates sapiente. Excepturi nulla veniam, quia, delectus sunt, fugiat maxime voluptatibus accusantium" 
        },
    ]

  return (
    <div className='newsTesti'>
        <SectionTitle Title="Ils en parlent" Paragraphe="S'abonner à notre newsletter"/>

        <div className="newsTesti__content flex">        
            <Swiper className="testimonials"
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}>
                {
                    Testimonials.map(({image, fullname, job, content}, index) => (
                        <SwiperSlide key={index} className="testimonial">
                            <img src={image} alt={content} />
                            <p> {content} </p>

                            <div className="authorInfo flex">
                                <h4> {fullname} </h4>
                                <p> {job} </p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="newsletter">
                <form action="">
                    <div className="input names">
                        <label htmlFor="name">Nom et Prénom</label>
                        <input type="text" placeholder='Votre Nom et Prénom' id='name'/> <br />
                    </div>

                    <div className="input names">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Entrer votre email' id='email'/> <br />
                    </div>
                
                    <Button title="Abonnez-vous" Class="button2" type="submit" Icon={<BsFillPlayFill />}/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsletterTestimonials
