import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(res => {
      console.log(res);
    });
  }
  render() {
    return <div className='App' />;
  }
}

export default App;
