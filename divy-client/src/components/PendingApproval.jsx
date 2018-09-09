import React, { Component } from 'react';

class PendingApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    }
  }

  render() {
    
    return (
      <div className="App">
      {
        <h1>Transactions Pending:</h1>
      }
      </div>
    )
  }

}

export default PendingApproval
