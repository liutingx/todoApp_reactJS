import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header';
//import {v4 as uuid} from "uuid";
import About from './components/pages/About';
import TodoList from './components/pages/TodoList';

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={TodoList} />
            <Route path="/about" component={About} />
            
          </div>
          
        </div>
      </Router>
    );
  }
  
}

export default App;
