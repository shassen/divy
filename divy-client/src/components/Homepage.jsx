import React, { Component } from 'react';
import { 
  getUser,
  getTransactions } from '../services/api';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      txn: [],
    }
  }

  componentDidMount() {
    getTransactions(this.props.user.id)
      .then(data => this.setState({
        txn: data.txn,
      }))
  }

  render() {
    const { txn } = this.state

    return (
      <div className="App" className="content">
        <h2>Your Transactions:</h2><br />
        <div>
          {
            txn.map(data => {
              return(
              <div>
              <div key={data.id} className="column">
                <h3 onClick={() => {
                  this.props.showEditForm(data)
                  }}>{data.location}
                </h3>
                <p>Description: {data.description}</p>
                <p>$ {data.amount}</p>
                {
                  data.users.map(user => {
                    return <p>User:<span> {user.username} </span></p>
                  })
                }
                <div>
                <button class="button is-primary is-small" onClick={() => {
                  this.props.handleDelete(data)
                }}>Delete Transaction</button>
                </div>
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

