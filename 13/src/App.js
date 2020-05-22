import React, {Component} from 'react';

import Ninjas from './Ninjas';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Ninjas name="Rau" age="22" belt="white"/>
        <Ninjas name="asdas" age="33" belt="black"/>
      </div>
    );

  }

}

export default App;
