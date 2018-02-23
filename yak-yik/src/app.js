import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Home from './Components/layout/Home';

class App extends Component {
     render(){

          return(
               <div>
                    YakYik!
                    <Home/>
               </div>
          )
     }
}

ReactDom.render(<App/>, document.getElementById('root'));
