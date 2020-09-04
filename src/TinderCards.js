import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import './TinderCards.css'
function TinderCards(){
    const [people, setPeople] = useState([
        {
            name:"eva",
            url:"https://i.f1g.fr/media/madame/260x390_crop/sites/default/files/img/2020/07/defile-jacquemus-printemps-ete-2021-paris-look-1.jpg",
        },
        {
            name:"escro",
            url:"https://cdn-media.rtl.fr/cache/Oxdm9d479P1USQvAWHGbvA/880v587-0/online/image/2019/1128/7799578800_bernard-arnault-en-2017.jpg",
        },
        {
            name:"lebg",
            url:"https://lechemiseur.fr/data/lechemiseur/blog/typologie/homme-contraste-cheveux-noirs-yeux-clairs.jpg",
        },
        {
            name:"lepsycopathe",
            url:"https://www.thekooples.com/media/wysiwyg/FW20-categorie-homme-02.jpg",
        },
        
    ]);

    useEffect(() =>{
      const unsubscribe =  database.collection('people').onSnapshot(snpashot => (
            setPeople(snpashot.docs.map(doc => doc.data()))
        ))
        return () => {
                unsubscribe();
        };
    }, [people]);

  return (
    <div className="tinderCards">
        <div className="tinderCards_container">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            >
                <div style={{backgroundImage: `url(${person.url})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
    

  );
}
export default TinderCards;