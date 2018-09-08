import React, { Component } from 'react';
import {
  getTransactions } from './services/api';
import Header from './components/Header';
import Login from './components/Login';
import Homepage from './components/Homepage';
import OptionPage from './components/OptionPage';
import Profile from './components/Profile';
import NewTxnPage from './components/NewTxnPage';
import PendingApproval from './components/PendingApproval';
import './App.css';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentView: "Login",
      user_id: '',
      username: '',
      email: '',
      password: '',
      isLoggedIn: null,
      isEdit: false,
      selectedJuiceId: null,
      isRegister: false,
    })
    this.logout = this.logout.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.cancel = this.cancel.bind(this)
    this.showRegisterForm = this.showRegisterForm.bind(this)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  //------------------------- AUTH Functions ------------------------//
  // references:
  // https://medium.com/@nick.hartunian/knock-jwt-auth-for-rails-api-create-react-app-6765192e295a
  // JZ react-rails-token-auth repo
  // cancel() {
  //   this.setState({
  //     name: '',
  //     sugar: '',
  //     isEdit: false,
  //     selectedJuiceId: null,
  //   })
  // }

  showRegisterForm() {
    this.setState({
      isRegister: true,
    })
  }

  register() {
    const url = `${BASE_URL}/users`
    const body = { "user": { "email": this.state.email, "password": this.state.password } }
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(body)
    }
    fetch(url, init)
      .then(res => res.json())
      .then(this.setState({
        isRegister: false,
      }))
      .catch(err => err.message)
  }

  login() {
    const url = `${BASE_URL}/user_token`;
    const body = { "auth": { "email": this.state.email, "password": this.state.password } }
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(body),
    }
    fetch(url, init)
      .then(res => res.json())
      .then(res => localStorage.setItem("jwt", res.jwt))
      .then(() => this.setState({
        isLoggedIn: true,
      }))
      .catch(err => console.log(err))
  }

  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }

  logout() {
    localStorage.removeItem("jwt")
    this.setState({
      isLoggedIn: false,
      juices: [],
      name: "",
      email: "",
    })
  }
  //----------------------- END OF AUTH ----------------------//


  determineWhichToRender() {
    const { currentView } = this.state;

    switch(currentView) {
      case 'Login':
      return <Login handleChange={this.handleChange}
          login={this.login}
          logout={this.logout}
          email={this.state.email}
          password={this.state.password}
          isRegister={this.state.isRegister}
          register={this.register}
        />;
      case 'Homepage':
      return <Homepage />;
      case 'OptionPage':
      return <OptionPage />;
      case 'Profile':
      return <Profile />;
      case 'NewTxnPage':
      return <NewTxnPage />;
      case 'PendingApproval':
      return <PendingApproval />;
    }
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {

    const links = [
      ''
    ]

    return (
      <div className="App">
      <Header />
      <Login />
      </div>
    );
  }
}

export default App;
