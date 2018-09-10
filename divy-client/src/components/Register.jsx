import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      wallet: null,
      email: '',
      password: '',
      password_confirmation: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="columns is-centered">
      <div className="column is-one-fifth">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="first_name" className="label">First Name: </label>
            <input className="input is-rounded is-hovered"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
                type="text"
                placeholder="First name"
            />
            <br /><br />
        <label htmlFor="last_name" className="label">Last Name: </label>
            <input className="input is-rounded is-hovered"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
                type="test"
                placeholder="Last name"
            />
            <br /><br />
        <label htmlFor="username" className="label">Username: </label>
            <input className="input is-rounded is-hovered"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                type="text"
                placeholder="Username"
            />
            <br /><br />
            <label htmlFor="wallet" className="label">Wallet: </label>
            <input className="input is-rounded is-hovered"
                name="wallet"
                onChange={this.handleChange}
                value={this.state.wallet}
                type="integer"
                placeholder="Wallet"
            />
            <label htmlFor="email" className="label">Email: </label>
            <input className="input is-rounded is-hovered"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                placeholder="Email"
            />
            <br /><br />
            <label htmlFor="password" className="label">Password:</label>
            <input className="input is-rounded is-hovered"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                placeholder="Password"
            />
            <label htmlFor="password" className="label">Confirm Password: </label>
            <input className="input is-rounded is-hovered"
                name="password_confirmation"
                onChange={this.handleChange}
                value={this.state.password_confirmation}
                type="password"
                placeholder="Confirm password"
            />
            <br /><br />
            <button className="button is-primary is-hovered is-small" type="submit">Register</button>
        </form>
      </div>
    </div>  
    )
  }

}

export default Register
