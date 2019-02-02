import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './components/topNav';
import Todo from './components/todo';
import TodoMasonary from './components/todoMasonary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Keep Clone Application</h1>
        <TopNav/>
        <Todo/>
        <TodoMasonary />
      </div>
    );
  }
}

export default App;
