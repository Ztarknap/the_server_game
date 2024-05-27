const cardsObj = [
    {
      "suit": "hearts",
      "value": 2,
      "placeable": true,
      "special": null,
      "img": '2_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 3,
      "placeable": true,
      "special": null,
      "img": '3_of_hearts.svg'
      
    },
    {
      "suit": "hearts",
      "value": 4,
      "placeable": true,
      "special": null,
      "img": '4_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 5,
      "placeable": true,
      "special": null,
      "img": '5_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 6,
      "placeable": true,
      "special": null,
      "img": '6_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 7,
      "placeable": true,
      "special": null,
      "img": '7_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 8,
      "placeable": true,
      "special": null,
      "img": '8_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 9,
      "placeable": true,
      "special": null,
      "img": '9_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": 10,
      "placeable": true,
      "special": null,
      "img": '10_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": "J",
      "placeable": true,
      "special": null,
      "img": 'jack_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": "Q",
      "placeable": true,
      "special": null,
      "img": 'queen_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": "K",
      "placeable": true,
      "special": null,
      "img": 'king_of_hearts.svg'
    },
    {
      "suit": "hearts",
      "value": "A",
      "placeable": true,
      "special": null,
      "img": 'ace_of_hearts.svg'
    },
    {
      "suit": "diamonds",
      "value": 2,
      "placeable": true,
      "special": null,
      "img": '2_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 3,
      "placeable": true,
      "special": null,
      "img": '3_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 4,
      "placeable": true,
      "special": null,
      "img": '4_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 5,
      "placeable": true,
      "special": null,
      "img": '5_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 6,
      "placeable": true,
      "special": null,
      "img": '6_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 7,
      "placeable": true,
      "special": null,
      "img": '7_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 8,
      "placeable": true,
      "special": null,
      "img": '8_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 9,
      "placeable": true,
      "special": null,
      "img": '9_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": 10,
      "placeable": true,
      "special": null,
      "img": '10_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": "J",
      "placeable": true,
      "special": null,
      "img": 'jack_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": "Q",
      "placeable": true,
      "special": null,
      "img": 'queen_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": "K",
      "placeable": true,
      "special": null,
      "img": 'king_of_diamonds.svg'
    },
    {
      "suit": "diamonds",
      "value": "A",
      "placeable": true,
      "special": null,
      "img": 'ace_of_diamonds.svg'
    },
    {
      "suit": "clubs",
      "value": 2,
      "placeable": true,
      "special": null,
      "img": '2_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 3,
      "placeable": true,
      "special": null,
      "img": '3_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 4,
      "placeable": true,
      "special": null,
      "img": '4_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 5,
      "placeable": true,
      "special": null,
      "img": '5_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 6,
      "placeable": true,
      "special": null,
      "img": '6_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 7,
      "placeable": true,
      "special": null,
      "img": '7_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 8,
      "placeable": true,
      "special": null,
      "img": '8_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 9,
      "placeable": true,
      "special": null,
      "img": '9_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": 10,
      "placeable": true,
      "special": null,
      "img": '10_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": "J",
      "placeable": true,
      "special": null,
      "img": 'jack_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": "Q",
      "placeable": true,
      "special": null,
      "img": 'queen_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": "K",
      "placeable": true,
      "special": null,
      "img": 'king_of_clubs.svg'
    },
    {
      "suit": "clubs",
      "value": "A",
      "placeable": true,
      "special": null,
      "img": 'ace_of_clubs.svg'
    },
    {
      "suit": "spades",
      "value": 2,
      "placeable": true,
      "special": null,
      "img": '2_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 3,
      "placeable": true,
      "special": null,
      "img": '3_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 4,
      "placeable": true,
      "special": null,
      "img": '4_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 5,
      "placeable": true,
      "special": null,
      "img": '5_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 6,
      "placeable": true,
      "special": null,
      "img": '6_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 7,
      "placeable": true,
      "special": null,
      "img": '7_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 8,
      "placeable": true,
      "special": null,
      "img": '8_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 9,
      "placeable": true,
      "special": null,
      "img": '9_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": 10,
      "placeable": true,
      "special": null,
      "img": '10_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": "J",
      "placeable": true,
      "special": null,
      "img": 'jack_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": "Q",
      "placeable": true,
      "special": null,
      "img": 'queen_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": "K",
      "placeable": true,
      "special": null,
      "img": 'king_of_spades.svg'
    },
    {
      "suit": "spades",
      "value": "A",
      "placeable": true,
      "special": null,
      "img": 'ace_of_spades.svg'
    }
  ]

module.exports = cardsObj;