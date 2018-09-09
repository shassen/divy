import React, { Component } from 'react';
import { 
  getUser,
  getTransactions } from '../services/api';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.id,
      email: this.props.email,
      users: [],
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    const init = {
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}`, 'Accept': 'application/json' },
      mode: 'cors'
    }
    getTransactions(this.props.user.id, init)
      .then(data => this.setState({
        txn: data.txn
      }))
  }

  // data => this.setState({ user: data })
  render() {

    return (
      <div className="App">
      <h1>Welcome {this.props.user.username}</h1> 
        {/* <button onClick={}></button> */}
      </div>
    )
  }

}

export default Homepage
