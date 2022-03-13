const { rngs } =  require('./main');

var seeds = ['batata', 'cenoura', 'tomate', 'abacaxi', 'abobora', 'picanha'];

console.log(rngs(seeds, true, 60));
console.log(rngs(seeds, false, 60));
