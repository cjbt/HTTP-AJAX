import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './component/Friends/Friends';
import NewFriendForm from './component/NewFriendForm/NewFriendForm';

class App extends Component {
  state = {
    friends: [],
    error: '',
    name: '',
    age: '',
    email: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
        <NewFriendForm
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
