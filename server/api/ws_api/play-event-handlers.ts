const cardsConst = require('../../const_obj/cardsConst.ts');

const playStartEventHandler = (obj:any) => {
    console.log(obj);
    return JSON.stringify({event:"play-start", payload: {userName: "aaa"}});
}

const getCardsEventHandler = () => {
    return JSON.stringify({event:"get-cards", payload: {cards: cardsConst}});
}

module.exports = {playStartEventHandler, getCardsEventHandler};