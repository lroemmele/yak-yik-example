var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/ZoneController');
var controllers = require('../controllers');

router.get('/:resource', (req, res, next) =>{

     var resource = req.params.resource;
     var controller = controllers[resource];

     if (controller == null){
          res.json({
               confimation: 'fail',
               message: 'Invalid Resource Request: ' +resource
          });
          return;
     }

     controller.find(req.query, (err, results) => {

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
});

router.get('/:resource/:id', (req, res, next) =>{

     var resource = req.params.resource;
     var id = req.params.id;
     var controller = controllers[resource];

     if (controller == null){
          res.json({
               confimation: 'fail',
               message: 'Invalid Resource Request: ' +resource
          });
          return;
     }


          controller.findById(id, (err, result) =>{
               if (err){
                    res.json({
                         confirmation: 'fail',
                         message: 'Not Found'
                    });
                    return;
               }
               console.log(result);
               res.json({
                    confirmation: 'success found id',
                    result: result
               });
          });
});

router.post('/:resource', (req, res, next) => {

     var resource = req.params.resource;
     var controller = controllers[resource];

     if (controller == null){
          res.json({
               confimation: 'fail',
               message: 'Invalid Resource Request: ' +resource
          });
          return;
     }

          controller.create(req.body, (err, result) => {
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
});

router.put('/:resource/:id', (req, res, next)=>{
     var resource = req.params.resource;
     var id = req.params.id;
     var controller = controllers[resource];

     if (controller == null){
          res.json({
               confimation: 'fail',
               message: 'Invalid Resource Request: ' +resource
          });
          return;
     }

     controller.update(id, req.body, (err, result)=>{
          if(err){
               res.json({
                    confimation: 'fail',
                    message: err
               });
               return;
          }
          res.json({
               confimation: 'success',
               resoult: result
          });
     })


});

router.delete('/:resource/:id', (req, res, next) => {
     var resource = req.params.resource;
     var id = req.params.id;
     var controller = controllers[resource];

     if (controller == null){
          res.json({
               confimation: 'fail',
               message: 'Invalid Resource Request: ' +resource
          });
          return;
     }

     controller.delete(id, (err, result)=>{
          if(err){
               res.json({
                    confimation: 'fail',
                    message: err
               });
               return;
          }
          res.json({
               confimation: 'success',
               resoult: result
          });
     })
});


module.exports = router;
