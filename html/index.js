const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    const pokemon = response.data;
    console.log('Nombre:', pokemon.name);
    console.log('Altura:', pokemon.height);
    console.log('Peso:', pokemon.weight);
    console.log('Habilidades:');
    pokemon.abilities.forEach((ability) => {
      console.log(`- ${ability.ability.name}`);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
