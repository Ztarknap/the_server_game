import { CardDetailedType } from "../../utils/ts_types"
import { Tooltip } from "@mui/material";
import './card-detailed.styles.scss'
import { useState } from "react";

export const CardDetailed = (card:CardDetailedType) => {

    let card_description = 'Just a plain card!';
    return (
        <span className="card-container">
           <Tooltip title={`${card_description}`} placement="right">
           <img src ={`/svg-cards/${card.img}`}></img>
            </Tooltip>
        </span>
    )
}