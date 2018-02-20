import React, { Component } from 'react';
import Zone from './Zone';

class Zones extends Component {
     constructor(props){
          super(props);

          this.state = {
               list: [
                    {name:'Zone 1', zipCode:'12345', numComments:10},
                    {name:'Zone 2', zipCode:'12346', numComments:20},
                    {name:'Zone 3', zipCode:'12346', numComments:20}
               ]
          }
     }


     render(){

          const listItems = this.state.list.map((zone, i) => {
               return (
                    <li>
                         <Zone zone={zone}/>
                    </li>
               )
          });

          return(
               <div>
                    <ol>
                         {listItems}
                    </ol>

               </div>
          )
     }
}

export default Zones;
