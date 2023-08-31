import React from 'react';
import './partenaires.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import Partenaire1 from '../../assets/logoSelfbi.png';

const Partenaires = () => {

  const Partenaires = [
    {
      image: Partenaire1,
      title: "IFRI"
    },
    {
      image: Partenaire1,
      title: "OPEN SI"
    },
    {
      image: Partenaire1,
      title: "ABDUS SALAM"
    },
    {
      image: Partenaire1,
      title: "2EI"
    },
    {
      image: Partenaire1,
      title: "Ecole Polytechnique de Paris"
    }
  ]

  return (
    <div className="partenaires">
       <SectionTitle Title="Nos Partenaires" Paragraphe="IMSP, une somme de partenariats constructifs" />

       <div className="partenaires__elts flex">
           {
            Partenaires.map(({image, title}, index) => (
              <div key={index} className="partenaire">
                  <img src={image} alt={`Logo de ${title}`} />
                  
                  <p> {title} </p>
              </div>
            ))
           }
       </div>
    </div>
  )
}

export default Partenaires
