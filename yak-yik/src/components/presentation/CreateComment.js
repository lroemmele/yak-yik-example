import React, {Component} from 'react';

class CreateComment extends Component {
     constructor(){
          super()
          this.state= {
               comment: {
                    username: '',
                    body: ''
               }
          }
     }

     updateComment(event){
          let updatedComment = Object.assign({}, this.state.comment);
          updatedComment[event.target.id] = event.target.value;
          this.setState({
               comment: updatedComment
          })
     }

     submitComment(event){
          this.props.onCreate(this.state.comment);
     }

     render(){
          return(
               <div>
               <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
               <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
               <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button><br/>
               </div>
          )
     }
}

export default CreateComment;
