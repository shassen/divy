import React, { Component } from 'react';

class EditTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: this.props.oneTxn.id,
      amount: this.props.oneTxn.amount,
      location: this.props.oneTxn.location,
      description: this.props.oneTxn.description,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleEditTransaction(this.state)
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
      <h3>Editing For: {this.props.oneTxn.location}</h3>
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input className="input is-hovered"
          type='integer'
          name='amount'
          value={this.state.amount}
          onChange={this.handleChange}
          placeholder={this.props.oneTxn.amount}
        /> <br />
        <input className="input is-hovered"
          type='text'
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
          placeholder={this.props.oneTxn.location}
        /> <br />
        <textarea className="textarea"
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder={this.props.oneTxn.description}
        /> <br />
        <button className="button is-primary is-small" type='submit'>Submit</button>
      </form>
    </div>
  )
  }
}

export default EditTxnPage
