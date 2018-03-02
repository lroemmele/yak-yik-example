import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import { APIManager } from '../../utils';


class Zones extends Component {
     constructor(props){
          super(props);

          this.state = {
               zone: {
                    name: '',
                    zipCodes: ''
               },
               list: []
          }
     }


     componentDidMount(){
          APIManager.get('/api/zone', null, (err, response)=>{
               if (err){
                    alert('ERROR: ' +err.message);
                    return;
               }

               //console.log(response);
               let results = response.results;
               this.setState({
                    list: results
               })
               console.log(this.state.list);
          });
     }

     updateZone(event){

          let updatedZone = Object.assign({}, this.state.zone);
          updatedZone[event.target.id] = event.target.value;

          this.setState({
               zone: updatedZone
          })
     }

     addZone(event){
          let updatedZone = Object.assign({}, this.state.zone);
          updatedZone['zipCodes'] = updatedZone.zipCodes.split(',');

          // APIManager.post('/api/zone', updatedZone, (err, response)=>{
          //      if (err){
          //           alert('ERROR: ' +err.message);
          //           return;
          //      }
          //      console.log('Zone CREATED: ' +JSON.stringify(response));
          // })
     }

     render(){

          const listItems = this.state.list.map((zone, i) => {
               return (
                    <li key={i}> <Zone zone={zone}/> </li>
               )
          });

          return(
               <div>
                    <ol>
                         {listItems}
                    </ol>

                    <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" className="form-control"/><br/>
                    <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" className="form-control"/><br/>
                    <button onClick={this.addZone.bind(this)} className="btn btn-danger">Submit</button>

               </div>
          )
     }
}

export default Zones;
