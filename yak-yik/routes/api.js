var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/ZoneController');


router.get('/:resource', (req, res, next) =>{

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
          });
     }
});

router.get('/:resource/:id', (req, res, next) =>{

     var resource = req.params.resoure;
     var id = req.params.id;

     if (resource == 'zone'){
          zoneController.findById(id, (err, result) =>{
               if (err){
                    res.json({
                         confirmation: 'fail',
                         message: 'Not Found'
                    });
                    return;
               }
               res.json({
                    confirmation: 'success found id',
                    result: result
               });
          });
     }
});

router.post('/:resource', (req, res, next) => {

     var resource = req.params.resource;

     if(resource == 'zone'){
          zoneController.create(req.body, (err, result) => {
               if (err){
                    res.json({
                         confimation: 'fail',
                         message: err
                    });
                    return;
               }

               res.json({
                    confimation: 'success',
                    result: result
               });
          });
     }
});

module.exports = router;
