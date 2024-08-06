import React from 'react';

const DescriptionLists = ({Services, Titre}) => {
  return (
    <div className="ChannelsContents">
        <h2> {Titre} </h2>

        <p>Bienvenue dans notre communauté chrétienne, un lieu où la foi en Jésus-Christ nous unit dans un amour partagé et une mission commune.</p>
        {
            Services.map((item) => (
                <div key={item.id} className="channelContent">
                <div className="flex">
                    <item.icon className="icon"/>
                    <b> {item.title} </b>
                </div>

                <p> {item.description} </p>
                </div>
            ))
        }
    </div>
  )
}

export default DescriptionLists;
