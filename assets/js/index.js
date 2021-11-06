'use strict';

let fruits;

fetch('./assets/data/fruits.json')
  .then((response) => response.json())
  .then((data) => {
    fruits = [...data];
  })
  .finally(() => {
    console.log(
      'We have those fruits in stock: ',
      fruits.map(({ fruit }) => fruit).join(', ')
    );
    console.log(
      'Red fruits are: ',
      fruits
        .filter(({ color }) => color === 'Red')
        .map(({ fruit }) => fruit)
        .join(', ')
    );
    console.log(
      'Large fruits are: ',
      fruits
        .filter(({ size }) => size === 'Large')
        .map(({ fruit }) => fruit)
        .join(', ')
    );
  });
