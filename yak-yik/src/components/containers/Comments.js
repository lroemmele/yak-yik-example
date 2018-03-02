import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './styles';
import { APIManager } from '../../utils';


class Comments extends Component {
     constructor(props){
          super(props);

          this.state = {
               comment:{
                    username: '',
                    body: '',
                    timestamp: ''
               },
               list: []
          }
     }

     // componentDidMount(){
     //      APIManager.get('/api/comments/', (err, response)=>{
     //           if(err){
     //                alert('ERROR:' +err.message);
     //                return;
     //           }
     //           let results = response.body.results;
     //           this.setState({
     //                list: results
     //           })
     //      })
     // }


     submitComment(event){
          //console.log('submitcomment'+ JSON.stringify(this.state.comment));

          let updatedList = Object.assign([], this.state.list);
          updatedList.push(this.state.comment);

          this.setState({
               list: updatedList
          })
     }

     updateComment(event){
          let updatedComment = Object.assign({}, this.state.comment);
          updatedComment[event.target.id] = event.target.value;


          this.setState({
               comment: updatedComment
          })
     }


     render(){
          const commentList = this.state.list.map((comment, i) => {
               return (
                    <li key={i}> <Comment currentComment={comment}/></li>
               )
          });

          return(
               <div>
                    <h3>Comments</h3>
                   <div style={styles.comment.commentsBox}>
                       <ul style={styles.comment.commentsList}>
                              {commentList}
                         </ul>

                         <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
                         <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
                         <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button><br/>
                    </div>
               </div>

          )
     }
}
export default Comments;
