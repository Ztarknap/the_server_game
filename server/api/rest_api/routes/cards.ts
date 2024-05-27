const express = require('express');
const router = express.Router();
const cardsConst = require('../../../const_obj/cardsConst.ts');


router.get('/', async (req:any, res:any) => {
    console.log(cardsConst);
    console.log('aaa');
    res.send(cardsConst);
})


module.exports = router;