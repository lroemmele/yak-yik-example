import React, { Component } from 'react';
import Comment from './Comment';

import styles from './styles';


class Comments extends Component {
     constructor(props){
          super(props);

          this.state = {
               list: [
                    {body: 'comment 1', username: 'guy1', timestamp: '10:00'},
                    {body: 'comment 2', username: 'guy2', timestamp: '11:00'},
                    {body: 'comment 3', username: 'guy3', timestamp: '12:00'},
                    {body: 'comment 4', username: 'guy4', timestamp: '01:00'}
               ]
          }
     }


     render(){


          const commentList = this.state.list.map((comment, i) => {

               return (
                    <li><Comment currentComment={comment}/></li>
               )
          });

          return(
               <div>
                    <h3>Comments</h3>
                    <div style={styles.comment.commentsBox}>
                         <ul style={styles.comment.commentsList}>
                              {commentList}
                         </ul>
                    </div>
               </div>

          )
     }
}
export default Comments;
