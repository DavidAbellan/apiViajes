let model = require('../models');

async function devuelveViajes() {
   return await model.viaje.findAll();

}

async function insertaViaje ( viaje) {
    
    return await model.viaje.create(viaje);
} 

module.exports = {
   devuelveViajes,
   insertaViaje

}