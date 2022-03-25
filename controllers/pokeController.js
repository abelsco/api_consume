const express = require('express');
const axios = require('axios');
const Pokemon = require('../models/pokeModel');

const router = express.Router();

router.get('/list', async(req, res) => {
    try {
        await axios.get('https://pokeapi.co/api/v2/pokemon/15').then((response) => {
            return res.json(response.data);
        })
        
    } catch (error) {
        return res.status(400).send({error: 'Error' + error});        
    }
});


module.exports = app => app.use('', router)