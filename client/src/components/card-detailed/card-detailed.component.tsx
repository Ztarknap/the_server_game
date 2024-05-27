import { CardDetailedType } from "../../utils/ts_types"
import './card-detailed.styles.scss'
import { useState } from "react";

export const CardDetailed = (card:CardDetailedType) => {
    console.log(card);
    const [isHover, isHoverSet] = useState(false);
    return (
        <span className="card-container">
           <img src ={`/svg-cards/${card.img}`}></img>
        </span>
    )
}