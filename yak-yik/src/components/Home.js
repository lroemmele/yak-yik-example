import React, { Component } from 'react';
import Zones from './Zones';
import Comments from './Comments';

class Home extends Component {
     render(){
          return(
               <div className="container">
                    <div className="row">
                         <div className="col-md-4">
                              <Zones/>
                         </div>
                         <div className="col-md-4">
                              <Comments/>
                         </div>
                    </div>
               </div>

          )

     }
}
export default Home;
