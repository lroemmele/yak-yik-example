import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
     constructor(props){
          super(props);

          this.state = {
               zone: {
                    name: '',
                    zipeCodes: ''
               },
               list: []
          }
     }


     componentDidMount(){
          superagent
          .get('/api/zone')
          .query(null)
          .set('Accept', 'application/json')
          .end((err, response)=>{

               if (err){
                    alert('ERROR: ' +err);
                    return;
               }

               //console.log(JSON.stringify(response.body));

               let results = response.body.results;

               this.setState({
                    list: results
               })

          })
     }

     updateZone(event){
          //console.log("updatezone: " +event.target.id+ "===" +event.target.value);
          let updatedZone = Object.assign({}, this.state.zone);
          updatedZone[event.target.id] = event.target.value;

          this.setState({
               zone: updatedZone
          })
     }

     addZone(event){
          let updatedList = Object.assign([], this.state.list);
          updatedList.push(this.state.zone);

          this.setState({
               list: updatedList
          })
     }

     render(){

          const listItems = this.state.list.map((zone, i) => {
               return (
                    <li key={i}>
                         <Zone zone={zone}/>
                    </li>
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
