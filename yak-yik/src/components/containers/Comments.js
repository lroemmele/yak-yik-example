import React, { Component } from 'react';
import {Comment, CreateComment} from '../presentation';
import styles from './styles';
import { APIManager } from '../../utils';


class Comments extends Component {
     constructor(props){
          super(props);

          this.state = {
               list: []
          }
     }

     componentDidMount(){
          APIManager.get('/api/comment', null, (err, response)=>{
               if(err){
                    alert('ERROR:' +err.message);
                    return;
               }
               let results = response.results;
               this.setState({
                    list: results
               })
          })
     }


     submitComment(comment){
          //console.log('submitcomment'+ JSON.stringify(this.state.comment));

          let updatedComment = Object.assign({}, comment);
          APIManager.post('/api/comment', updatedComment, (err, response)=>{
               if (err){
                    alert("ERROR: "+ err.message);
                    return;
               }
               let updatedList = Object.assign([], this.state.list);
               updatedList.push(response.result);
               this.setState({
                    list: updatedList
               });
          });

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

                         <CreateComment onCreate={this.submitComment.bind(this)} />
                    </div>
               </div>

          )
     }
}
export default Comments;
