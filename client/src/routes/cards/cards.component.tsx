import { useState, useEffect } from "react";

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
        console.log(data);
        setCardsObj(data);
    }
    
    useEffect(()=> {
        getCards();
    }, [])
    
    return (
        <div>
        {cardsObj.map((card:any) => {
            return card;
        })}
        </div>
    )
}