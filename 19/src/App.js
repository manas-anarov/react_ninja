import React, {Component} from 'react';

import Ninjas from './Ninjas';

import AddNinja from './AddNinja';

class App extends Component{
  state={
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja=(ninja)=>{
    // ninja.id = Math.random(4,10);
    ninja.id = Math.floor(Math.random() * 10);
    let ninjas =[...this.state.ninjas, ninja]
    // console.log(ninjas)


    this.setState({
      ninjas:ninjas
    }
    )
  }

  deleteNinja =(id) =>{

    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    })

    this.setState({
      ninjas:ninjas
    }
    )

  }
  render(){
    return (
      <div className="App">
        <Ninjas ninjas = {this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}  />
      </div>
    );

  }

}

export default App;
