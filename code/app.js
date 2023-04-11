const axios = require('axios');
App = {
    web3Provider: null,
    contracts: {},
    init: async function() {
        
        const pets = require('./pets.json');
        for(let i = 0 ; i< pets.length; i = i+1) {
            console.log(pets[i]['name']);
        }
    }
}  

App.init();
