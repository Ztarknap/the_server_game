const express = require('express');
const cardRoute = require('./routes/cards.ts');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/api/cards',cardRoute);

app.listen(3001, ()=> {
    console.log('listening on port 3001');
})

console.log('aaaa');