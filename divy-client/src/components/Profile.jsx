import React, { Component } from 'react';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }


  render() {

    return (
      <div className="App">
        <h1>Username: {this.props.user.username}</h1><br />
        <h2>Name: {this.props.user.first_name} {this.props.user.last_name}</h2><br />
        <h2>Email: {this.props.user.email}</h2><br />
        <h2>Wallet Balance: ${this.props.user.wallet}</h2><br />
        <button class="button is-primary is-small" onClick={() => {
          this.props.showNewTxnForm()
        }}>Create Transaction</button>
      </div>
    )

  }

}

export default Profile
