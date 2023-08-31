import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import './../Services/Services.css';
import './AbonnementSection.css';
import { BsArrowRight } from 'react-icons/bs';
import { LuStars } from 'react-icons/lu';
import Button from '../Button/Button';

// Abonnement Icons
import {TbHexagonNumber1} from "react-icons/tb";
import {TbHexagonNumber3} from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";

const AbonnementSection = () => {

    const AbonnementSection = [
        {
            id: 1,
            icon: TbHexagonNumber1,
            ancienPrix: "8.000 Fr",
            nouveauPrix: "8.000 Fr",
            description: "MAG, Dreamlink T1, Avov, Android, WebTV (navigateur), et XBMC/KODI sont les plates-formes supportées."
        },

        {
            id: 2,
            icon: TbHexagonNumber3,
            ancienPrix: "23.000 Fr",
            nouveauPrix: "20.000 Fr",
            description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24."
        },

        {
            id: 3,
            icon: TbHexagonNumber6,
            ancienPrix: "44.000 Fr",
            nouveauPrix: "40.000 Fr",
            description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle."
        }
    ]

  return (
    <section className="services abonnements">
        <h3 className="sectionName">Nos Offres</h3>

        <div className="servicesTitle flex">
            <h2>Abonnements</h2>
            <p className='flex'>View More <BsArrowRight className='icon' /></p>
        </div>

        <p className="description">
        Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natoque penatibus et magnis dis parturient montes.
        </p>

        <div className="servicesContent grid">
            {
                AbonnementSection.map((item, index) => (
                    <div key={item.id} className= {(item.ancienPrix !== item.nouveauPrix)? "serviceContent promotionContent before": "serviceContent"}>

                        <Link to={`/abonnement/${item.id}`}>
                            <div className="flex" style={ { justifyContent: "center", gap: "1rem" } }>
                                <item.icon className="icon"/> 
                                <h2>Mois</h2>
                            </div>
                            
                            <div className="prix flex">
                                { (item.ancienPrix !== item.nouveauPrix) && <h3 className='serviceTitle oldprice'> {item.ancienPrix} </h3>}
                                <h3 className="serviceTitle newprice"> {item.nouveauPrix} </h3>
                            </div>
                            <p className="serviceDesc"> { item.description } </p>
                            { (item.ancienPrix !== item.nouveauPrix) && <span className="promotion">Spéciale Promo <LuStars /></span>}
                            
                        </Link>
                    </div>
                ))
            }
        </div>

        <Link to='/abonnement'>
            <Button title="Votre abonnement" />
        </Link>
    </section>
  )
}

export default AbonnementSection;
