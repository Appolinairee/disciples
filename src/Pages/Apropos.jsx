import React from 'react';

// Services Icons
import {BsServer} from "react-icons/bs";
import {TbClover} from "react-icons/tb";
import {ImFilm} from 'react-icons/im';

import Image1 from '../assets/etrechretien.jpeg';
import Image2 from '../assets/OIP.jpeg';
import Image3 from '../assets/monpeuple.png';

import ChannelsPresentation from '../components/ChannelsPresentation/ChannelsPresentation';

const Apropos = () => {
  const Channels = [
    {
        id: 1,
        image: Image1,
        categorie: [ "Partage", "Amour", "Prière" ],
        title: "Une communauté"
    },

    {
        id: 2,
        image: Image2,
        categorie: [ "Prière", "Espérance", "Travail" ],
        title: "La prière"
    },

    {
        id: 3,
        image: Image3,
        categorie: [ "Amour", "Foi", "Sobriété" ],
        title: "L'Amour"
    },
  ]

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
        description: "Nous avons à cœur de partager la bonne nouvelle de Jésus-Christ avec ceux qui ne le connaissent pas. Nous organisons des événements, des études bibliques et des actions d'évangélisation pour répandre l'amour et l'espoir que nous avons en Christ."
    },

    {
        id: 2,
        icon: ImFilm,
        title: "Le drama, un de nos moyens",
        description: "Les films et les vidéos, par leur capacité à créer des images saisissantes et des récits captivants, peuvent servir de catalyseurs pour l'éducation, l'évangélisation et la sensibilisation. "
    }

     
  ]
    
  return (
    <div>
      <ChannelsPresentation Channels={Channels} Services={Services} Titre="Nos chaînes en cascade" />
    </div>
  )
}

export default Apropos
