var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/ZoneController');


router.get('/:resource', function (req, res, next) {
     var resource = req.params.resource;

     if (resource == 'zone'){
          zoneController.find(req.query, (err, results)=>{
               if (err){
                    res.json({
                         confirmation: 'fail',
                         message: err
                    });
                    return;
               }
               res.json({
                    confirmation: 'success',
                    results: results
               });

          })
     }



});




module.exports = router;
