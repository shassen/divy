import React, { Component } from 'react';
import { 
  getUser,
  getTransactions } from '../services/api';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user_id: null,
      email: this.props.email,
      users: []
    }
  }

  componentDidMount() {
    getUser()
  }

  render() {

    return (
      <div className="App">
      <h1>Welcome {this.props.email}</h1> 
        {/* <button onClick={}></button> */}
      </div>
    )
  }

}

export default Homepage
