"use strict";

const toArrayInsert = (superhero) => [
  +superhero.heroId,
  superhero.name,
  +superhero.yearOfBirth,
  superhero.superproperty,
  superhero.costume,
];

const toArrayUpdate = (superhero) => [
  +superhero.heroId,
  superhero.name,
  +superhero.yearOfBirth,
  superhero.superproperty,
  superhero.costume,
];

module.exports = { toArrayInsert, toArrayUpdate };
