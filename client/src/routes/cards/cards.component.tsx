import { useState, useEffect } from "react";
import { CardDetailed } from "../../components/card-detailed/card-detailed.component";
import './cards.styles.scss'

const getCardsREST = async() => {
    const res = await fetch(
     "/api/cards",
     {  method: 'get',
         headers: {'Content-Type': 'application/json'}
     }
    );
    const data = await res.json();
    return data; 
    }

 
export const Cards = () => {
    const [cardsObj, setCardsObj] = useState([]);
    const getCards = async() => {
        const data = await getCardsREST();
        setCardsObj(data);
    }
    
    useEffect(()=> {
        getCards();
    }, [])
    
    return (
        <div className="cards-list">
        {cardsObj.map((card:any) => {
            return <CardDetailed {...card}/>
        })}
        </div>
    )
}