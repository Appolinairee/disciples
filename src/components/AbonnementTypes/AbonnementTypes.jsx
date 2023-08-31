import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './AbonnementTypes.css';
import SteepAbonnement from '../SteepAbonnement/SteepAbonnement';

// Abonnement Icons
import {TbHexagonNumber1} from "react-icons/tb";
import {PiTelevisionSimple} from "react-icons/pi";
import {TbHexagonNumber3} from "react-icons/tb";
import { TbHexagonNumber6 } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import {BiSolidSkipNextCircle} from "react-icons/bi"

const AbonnementTypes = () => {
    
    const Abonnements = [
        {
            id: 1,
            title: "Mois",
            type: "Abonnement",
            icon: TbHexagonNumber1,
            oldPrice: 8000,
            newPrice: 8000,
            description: "MAG, Dreamlink T1, Avov, Android, WebTV (navigateur), et XBMC/KODI sont les plates-formes supportées.",
            details: [ "6000 chaines", "31 jours pour d'innoubliables moments" ]
        },

        {
            id: 2,
            title: "Mois",
            type: "Abonnement",
            icon: TbHexagonNumber3,
            oldPrice: 23000,
            newPrice: 20000,
            description: "Notre INFRASTRUCTURE assure la sécurité des données AU PLUS HAUT niveau. Vous pouvez regarder vos chaînes sans coupure 24h / 24.",
            details: [ "6000 chaines", " 3 mois pour une odyssée exeptionnelle" ]
        },

        {
            id: 3,
            title: "Mois",
            type: "Abonnement",
            icon: TbHexagonNumber6,
            oldPrice: 44000,
            newPrice: 40000,
            description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle.",
            details: [ "6000 chaines", "6 mois pour vivre vos passions" ]
        },

        {
            id: 4,
            title: "Décodeur",
            type: "Commander",
            icon: PiTelevisionSimple,
            oldPrice: 44000,
            newPrice: 40000,
            description: "Nous proposons un plan de revendeur avantageux qui vous permet de développer et de gérer votre propre clientèle.",
            details: [ "6000 chaines", "6 mois pour vivre vos passions" ]
        }
    ]



  return (
    <section className="abonnementTypes">
        <SteepAbonnement steep={1} />

        <h1>Votre choix! Notre mot d'ordre!</h1>

        <div className="abonnements">
            {
                Abonnements.map((item, index) => (
                    <div className="abonnement flex" key={item.id}>
                        <div className="abonnementTitle">
                            <h2 className='flex'> <p>{item.type}</p><item.icon className="icon" /> {item.title} </h2>
                           
                            <div className="prices flex">
                               { (item.oldPrice !== item.newPrice) &&  <div className="price oldPrice"> {item.oldPrice} Fr</div>}

                                <div className="price newPrice"> {item.newPrice} Fr</div>
                            </div>
                        </div>

                        <div className="abonnementDetails">
                            {
                                item.details.map((detail, index) => (
                                    <p   className="abonnementDetail before" key={index}> <GrValidate className='icon' /> {detail}</p>
                                    
                                ))
                            }
                            <p className='before'><GrValidate className='icon' /> { parseInt(((parseInt(item.oldPrice) - parseInt(item.newPrice))/ parseInt(item.oldPrice))*100) }% de réduction </p>
                        </div>
                            
                        <Link to={ (item.type !== "Commander")? `./${item.id}`: '/decodeur'}>
                            <button  className="btn">{item.type}<BiSolidSkipNextCircle className='icon'/> </button> 
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default AbonnementTypes;
