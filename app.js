const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }







    
// Exercise 3

game.difficulty = "Medium";



// Exercise 4

const starterPokemon = pokemon.filter(p => 
p.starter === true);
starterPokemon.forEach(p => game.party.push(p));


// Exercise 5
const threepokemon = pokemon.filter (p =>
  p.type ==='fire' && p.hp >=90
 );
threepokemon.forEach(p =>
  game.party.push(p));
const lastp =pokemon.find (p =>
  p.number === 24);
game.party.push(lastp);

// Exercise 6
const newGameParty = game.party.sort((p_a ,p_b) =>
  p_b.hp - p_a.hp
)

// Exercise 7

game.gyms.forEach(g=> {
  if(g.difficulty < 3){
    g.completed = true
  }
});

// Exercise 8


