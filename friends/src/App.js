import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './component/Friends/Friends';

class App extends Component {
  state = {
    friends: [],
    error: ''
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          error: ''
        });
      })
      .catch(err => {
        console.log(err.response.statusText);
        this.setState({
          error: `Friend ${err.response.statusText} :(`
        });
      });
  }
  render() {
    return (
      <div className='App'>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
