'use strict';

const { MyMath } = require('./MyMath');
const { Component } = require('./Component');

const c = new Component();
console.log(c.render());

// console.log(MyMath);

console.log('hello node');
console.log(2 + 2);

const res = MyMath.sum(2, 3, 354, 525, 4);

console.log(res);
