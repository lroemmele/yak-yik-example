import React, {Component} from 'react';

class CreateZone extends Component{
     constructor(){
          super();
          this.state={
               zone: {
                    name: '',
                    zipCodes: ''
               }
          }
     }

     updateZone(event){
          let updatedZone = Object.assign({}, this.state.zone);
          updatedZone[event.target.id] = event.target.value;
          this.setState({
               zone: updatedZone
          })
     }

     addZone(event){
          this.props.onCreate(this.state.zone);
     }

     render(){
          return(
               <div>
               <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" className="form-control"/><br/>
               <input id="zipCodes" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" className="form-control"/><br/>
               <button onClick={this.addZone.bind(this)} className="btn btn-danger">Submit</button>
               </div>
          )
     }
}
export default CreateZone;
