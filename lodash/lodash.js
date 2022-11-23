var _ = require('lodash');

let products = [9, 6];

function square(n) {
  return n * n;
}

const mappedArr = products.map((prod) => {
  return prod * 2
})

const lodash = _.map(products, square);

console.log(lodash)
console.log(mappedArr)