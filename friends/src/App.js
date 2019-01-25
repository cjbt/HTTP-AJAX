import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import Friends from './component/Friends/Friends';
import NewFriendForm from './component/NewFriendForm/NewFriendForm';

class App extends Component {
  state = {
    friends: [],
    error: '',
    name: '',
    age: '',
    email: '',
    isUpdating: false,
    beingUpdated: 0
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
        console.log(err);
        this.setState({
          error: `Friend ${err} :(`
        });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickUpdate = (id, email, age, name) => {
    console.log(this.state.isUpdating);
    this.setState(prevState => ({
      isUpdating: !prevState.isUpdating,
      beingUpdated: id,
      email,
      age,
      name
    }));
  };

  handleUpdate = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.beingUpdated}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err => console.log(err));
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        friends: res.data
      });
    });
  };

  handleSubmit = () => {
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err =>
        this.setState({
          error: err
        })
      );
  };

  render() {
    return (
      <div className='App'>
        {!this.state.friends && <h2>{this.state.error}</h2>}
        <Friends
          friends={this.state.friends}
          handleDelete={this.handleDelete}
          isUpdating={this.state.isUpdating}
          clickUpdate={this.clickUpdate}
        />
        <NewFriendForm
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
