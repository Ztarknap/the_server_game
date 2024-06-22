const cardsConst = require('../../const_obj/cardsConst.ts');
const {loginUser} = require('./auth.ts');

const playStartEventHandler = (obj:any) => {
    console.log(obj);
    return JSON.stringify({event:"play-start", payload: {userName: "aaa"}});
}

const getCardsEventHandler = () => {
    return JSON.stringify({event:"get-cards", payload: {cards: cardsConst}});
}

const loginEventHandler = (obj:any) => {
    const loginResult = loginUser(obj);
    return JSON.stringify({event:"login", payload: {msg: loginResult}});
}

const inviteEventHandler = (obj:any) => {
    console.log('inviteventhandler ',obj);
    return JSON.stringify({event: "invite", payload: {msg: 'tt'}})
}

module.exports = {playStartEventHandler, getCardsEventHandler,loginEventHandler, inviteEventHandler};