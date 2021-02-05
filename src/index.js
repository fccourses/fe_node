'use strict';

/* Resolving -> Loading -> Wrapping -> Evaluation -> Caching */

const { MyMath } = require('../MyMath');


/* 
    How require() works:

    1) Core Modules
    2) File
      2.1) *.js
      2.2) *.json
    3) Directory
      3.1) package.json -> "main"
      3.2) index .js | .json
    4) node_modules
    5) throw new Error()
 */

console.log('index.js');


