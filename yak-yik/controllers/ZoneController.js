var Zone = require('../models/Zone');

module.exports = {

     find: (parms, callback) => {
          Zone.find(parms, (err, zones) =>{
               if (err){
                    callback(err, null);
                    return;
               }

               callback(null, zones);

          });
     },

     findById: () => {

     },

     update: () => {

     },

     destroy: () => {

     }

}
