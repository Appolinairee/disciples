import './ResearchSection.css';
import Image1 from "../../assets/programme1.jpg";
import Image2 from "../../assets/programme2.jpg";
import Image3 from "../../assets/programme3.jpg";
import Image4 from "../../assets/programme4.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import SectionTitle from '../SectionTitle/SectionTitle';

const ResearchSection = () => {

  const Recherches = [
    {
      img: Image1,
      title: "Optimisation neurologique",
      category: "Informatique",
      category: "Informatique",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores sequi, commodi delectus quia molestiae corrupti. Aperiam harum est laboriosam!"
    },
    {
      img: Image2,
      title: "Optimisation neurologique",
      category: "Informatique",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores sequi, commodi delectus quia molestiae corrupti. Aperiam harum est laboriosam!"
    },
    {
      img: Image3,
      title: "Optimisation neurologique",
      category: "Informatique",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores sequi, commodi delectus quia molestiae corrupti. Aperiam harum est laboriosam!"
    },
    {
      img: Image4,
      title: "Optimisation neurologique",
      category: "Informatique",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro maiores sequi, commodi delectus quia molestiae corrupti. Aperiam harum est laboriosam!"
    },
  ]

  return (
    <div className="researchs">
          <SectionTitle Title='Nos Travaux et Créations' Paragraphe="We research all over all"/>

          <Swiper className='research_section' 
             slidesPerView={1}
             spaceBetween={40}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
              600: {
                slidesPerView: 2
              }
             }}
             modules={[Pagination]}
          >
            {
              Recherches.map((item, index) => (
                <SwiperSlide key={index} className="research_section_element">
                    <img src={item.img} alt={item.title} />
                    <div className="research_section_element_content">
                      <span> {item.category} </span>
                      <h3> {item.title} </h3>
                      <p> {item.description} </p>

                      <b> Lire plus </b>
                    </div>
                    <div className="overlay"></div>
                </SwiperSlide>
              ))
            }
          </Swiper>
    </div>
    
  )
}

export default ResearchSection
