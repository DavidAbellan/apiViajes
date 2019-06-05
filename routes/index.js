var express = require('express');
var router = express.Router();
var viajeContr = require('../controllers/viaje');

/* GET home page. */
router.get('/api/travels', async function(req, res, next) {
  let arraydeviajes = await  viajeContr.devuelveViajes()
  console.log(arraydeviajes);

  res.send( {
    arraydeviajes
   });
});

router.post('/api/travels', async function (rq,rs) {
  await viajeContr.insertaViaje(rq.body);

} )

module.exports = router;
