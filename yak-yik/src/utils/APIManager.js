import superagent from 'superagent'

export default{

     get: (url, params, callback)=>{
          superagent
          .get(url)
          .query(params)
          .set('Accept', 'application/json')
          .end((err, response)=>{

               if(err){
                    callback(err, null);
                    alert('ERROR: '+err);
                    return;
               }
               //console.log(response);

               const confirmation = response.body.confirmation;
               if (confirmation != 'success'){
                    callback({message: response.body.message}, null);
                    return;
               }
               callback(null, response.body);
          })
     },

     post: (url, body, callback)=>{
          superagent
          .post(url)
          .send(body)
          .set('Accept', 'application/json')
          .end((err, response)=>{
               if(err){
                    console.log("error");
                    callback(err,null);
                    return;
               }
               const confirmation = response.body.confimation;
               if (confirmation != 'success'){
                    callback({message: response.body.message}, null);
                    return;
               }
               console.log(response.body);
               callback(null, response.body);
          })
     },

     put: ()=>{

     },

     delete: ()=>{

     }


}
