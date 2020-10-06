import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import './App.css';
import './bootstrap.css';
import ToDoApp from './components/todo/ToDoApp'

 
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp></ToDoApp>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
      </div>
    );
  }
}


export default App;