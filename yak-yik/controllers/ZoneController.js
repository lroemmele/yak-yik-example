var Zone = require('../models/Zone');

module.exports = {

     find: (params, callback) => {
          Zone.find(params, (err, zones) =>{
               if (err){
                    callback(err, null);
                    return;
               }

               callback(null, zones);

          });
     },

     findById: (id, callback) => {
          Zone.findById(id, (err, zone)=>{
               if (err){
                    callback(err, null);
                    return;
               }

               callback(null, zone);
          });
     },

     create: (params, callback) => {
          Zone.create(params, (err, zone)=>{
               
               if(err){
                    callback(err, null);
                    return;
               }

               callback(null, zone);

          });
     },

     update: () => {

     },

     destroy: () => {

     }

}
