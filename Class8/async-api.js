import {fetch} from 'node-fetch';

fetch = require('node-fetch');


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))

