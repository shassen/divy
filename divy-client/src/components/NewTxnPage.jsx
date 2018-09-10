import React, { Component } from 'react';

class NewTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      location: '',
      description: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNewTransaction(this.state)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="control">
      <h3>New Transaction:</h3>
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input className="input is-hovered"
          type='integer'
          name='amount'
          value={this.state.amount}
          onChange={this.handleChange}
          placeholder="enter amount here"
        /> <br />
        <input className="input is-hovered"
          type='text'
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
          placeholder="enter location here"
        /> <br />
        <textarea className="textarea"
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="enter description here"
        /> <br />
        <button className="button is-primary is-small" type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}

export default NewTxnPage