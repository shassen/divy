import React, { Component } from 'react';
import { 
  getUser,
  getTransactions } from '../services/api';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user_id: this.props.id,
      email: this.props.email,
      users: []
    }
  }

  componentDidMount() {
    getUser(this.props.id)
      .then(data => this.setState({ user: data }))
  }

  render() {

    return (
      <div className="App">
      <h1>Welcome {this.state.email}</h1> 
        {/* <button onClick={}></button> */}
      </div>
    )
  }

}

export default Homepage
