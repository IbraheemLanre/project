"use strict";

const toArrayInsert = (superhero) => [
  +superhero.heroId,
  superhero.name,
  +superhero.yearOfBirth,
  superhero.superproperty,
  superhero.costume,
];

const toArrayUpdate = (superhero) => [
  superhero.name,
  +superhero.yearOfBirth,
  superhero.superproperty,
  superhero.costume,
  +superhero.heroId
];

module.exports = { toArrayInsert, toArrayUpdate };
