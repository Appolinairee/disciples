import './ResearchSection.css';
import Image1 from "../../assets/OIP.jpeg";
import Image2 from "../../assets/enseigement2.jpeg";
import Image3 from "../../assets/OIP (1).jpeg";

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
      title: "Qui est Jésus-Christ?",
      category: "Thème de base",
      description: "Jésus-Christ, le Fils de Dieu, est au cœur de la foi chrétienne. Son enseignement repose sur l'amour, la compassion, la vérité et la rédemption..."
    },
    {
      img: Image2,
      title: "L'Amour du Prochain ",
      category: "Amour",
      description: "L'un des enseignements les plus fondamentaux de Jésus est l'amour du prochain, quel que soit son origine, sa croyance ou son statut social..."
    },
    {
      img: Image3,
      title: "L'Importance de la Prière ",
      category: "Prière",
      description: "La prière est un moyen vital pour établir une relation intime avec Dieu. Elle est une conversation avec notre Créateur, un acte de foi, de gratitude, de supplication et d'adoration."
    },
  ]

  return (
    <div className="researchs">
          <SectionTitle Title='Les enseignements' Paragraphe="L'oeuvre du Saint esprit pour nous"/>

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
