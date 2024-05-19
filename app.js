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


game.party = game.party.map(p => {
  if (p.starter=== true) {
    const evolveParty = pokemon.find(pk =>
     pk.number === p.number + 1); 
    return evolveParty
  }else{
    return p
  }
})

// Exercise 9

const pokeN = game.party.map(p => p.name)

// Exercise 10

const starterN = pokemon.map(p => {
  if (p.starter === true){
    return p.name
  }
})

// Exercise 11

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};


// Exercise 12



// Exercise 13


game.gyms.forEach(g=> {
  if(g.difficulty < 6){
    g.completed = true
  }
});
// Exercise 14
const gymCom= {
    completed: 0,
    incomplete: 0,
  };
game.gyms.forEach(gym => {
    if (gym.completed === true) {
      gymCom.completed += 1;
    } else {
      gymCom.incomplete += 1;
    }
  });
// Exercise 15
game.partyCount = () => {
  const count = game.party.length
  return count
} 
// Exercise 16
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});
 

// Exercise 17

console.log(game);