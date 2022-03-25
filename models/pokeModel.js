const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//id	The identifier for this resource. integer
//name	The name for this resource.	string
//base_experience	The base experience gained for defeating this Pokémon.	integer
//height	The height of this Pokémon in decimetres.	integer
//is_default	Set for exactly one Pokémon used as the default for each species.	boolean
//order	Order for sorting. Almost national order, except families are grouped together.	integer
//weight	The weight of this Pokémon in hectograms.	integer


const Pokemon = new Schema({
    id: {type: Number, require:true},
    name: {type: String, require:true},
    height: {type: Number},
    order: {type: Number}

});

mongoose.exports = mongoose.model('Pokemons', Pokemon);