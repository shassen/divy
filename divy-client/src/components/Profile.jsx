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
        <h1>Profile: {this.props.user.username}</h1>
      </div>
    )

  }

}

export default Profile
