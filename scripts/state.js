const products = [
  {
    id: "dragonAleStatue",
    name: "Dragon Ale Statue",
    price: 20,
    description: "Small statue of a dragon drinking ale.",
    image: "../images/dragon-goblet.jpg",
  },
  {
    id: "fairyPouch",
    name: "Fairy Pouch of Toad Stools",
    price: 235,
    description: "Summon toad stool from the pouch with fairy dust",
    image: "../images/fairy-dust.jpg",
  },
  {
    id: "badOfHolding",
    name: "Bad of Holding",
    price: 300,
    description: "You know what this is.",
    image: "../images/bag-of-holding.png",
  },
];

let currentUserCart = new Cart();
