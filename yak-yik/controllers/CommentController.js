var Comment = require('../models/Comments');

module.exports = {

     find: (params, callback) => {

          Comment.find(params, (err, comment) =>{

               if (err){
                    callback(err, null);
                    return;
               }

               callback(null, comment);

          });
     },

     findById: (params, callback) => {

         Comment.findById(params, (err, comment) => {
             if (err) {
                 callback(err, null);
                 return;
             }

             callback(null, zone);
         });
     },

     create: (params, callback) => {

          Comment.create(params, (err, comment)=>{

               if(err){
                    callback(err, null);
                    return;
               }

               callback(null, comment);

          });
     },

     update: (id, params, callback) => {
          console.log('id = ' +id);
          console.log('params = ' +params);
          console.log('callback = ' +callback);

          Comment.findByIdAndUpdate(id, params, {new:true}, (err, zone) => {
               if (err){
                    callback(err, null);
                    return;
               }

               callback(null, comment);
          });
     },

     delete: (id, callback) => {
          Comment.findByIdAndRemove(id, (err)=>{
               if(err){
                    callback(err, null);
                    return;
               }

               callback(null, null);
          });
     }

}
