import React, { Component } from 'react';
import styles from './styles';

class Zones extends Component {

     onSelectTitle(event){
          event.preventDefault();
          this.props.select(this.props.index);
     }

     render(){

          const style = styles.zone;
          const zipCode = this.props.zone.zipCodes[0];
          const title = (this.props.isSelected) ? <a style={styles.zone.title} href="#">{this.props.zone.name}</a> : <a href="#">{this.props.zone.name}</a>;

          return(
               <div style={style.container}>
                    <h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
                         {title}
                    </h2>
                    <span className="detail" >{this.props.zone.zipCodes}</span><br/>
                    <span className="detail" >comments {this.props.zone.numComments}</span>
               </div>
          )
     }
}


export default Zones;
