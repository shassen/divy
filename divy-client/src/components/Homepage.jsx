import React, { Component } from 'react';
import { 
  getUser,
  getTransactions } from '../services/api';

class Homepage extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      user: this.props.user,
      txn: [],
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
        txn: data.txn,
      }))
  }

  render() {
    const { txn } = this.state

    return (
      <div className="App">

        <p>Wallet Balance: $ {this.props.user.wallet}</p>
        <button onClick={() => {
          this.props.showNewTxnForm()
        }}>Create New Transaction</button>
        <div>
          {
            txn.map(data => {
              return(
              <div>
                <h1 onClick={() => {
                  this.props.showEditForm(data)
                  }}>{data.location}
                </h1>
                <p>Description: {data.description}</p>
                <p>$ {data.amount}</p>
                {
                  data.users.map(user => {
                    return <p>Users:<span> {user.username} </span></p>
                  })
                }
                <div>
                <button onClick={() => {
                  this.props.handleDelete(data)
                }}>Delete Transaction</button>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  
}

export default Homepage

