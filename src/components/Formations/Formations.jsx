import React from 'react';
import Formation from './Formation';
import './Formation.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { BsArrowRight } from 'react-icons/bs';

const Formations = () => {

    const formations = [
        {
            title: "Master Informatique et TIC",
            categorie: "Informatique",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sint assumenda repellat neque reprehenderit, aliquam perspiciatis"
        },

        {
            title: "Master Informatique et TIC",
            categorie: "Informatique",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sint assumenda repellat neque reprehenderit, aliquam perspiciatis"
        },

        {
            title: "Master Informatique et TIC",
            categorie: "Informatique",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sint assumenda repellat neque reprehenderit, aliquam perspiciatis"
        },

    ]

  return (
    <div className="formationsSection"> 
            <SectionTitle Title="Nos Formations" Paragraphe="Tout pour tous" Icon={BsArrowRight} />

            <div className='formations grid'>
                {
                    formations.map(({title, categorie, description}, index) => (
                        <Formation key={index} title={title} categorie={categorie} description={description} />
                    ))
                }
            </div>

            
            <div className="section_title_plus flex">
                <p> **Voir Plus</p>
                <BsArrowRight className='icon' />
            </div>
    </div>
  )
}

export default Formations;
