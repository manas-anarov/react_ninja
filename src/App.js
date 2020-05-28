import React, { Component } from 'react';
import Todos from './Todos'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import Post from './components/Post'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;