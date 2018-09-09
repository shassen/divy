import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import {
  getTransactions,
  getUser } from './services/api';
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
      isRegister: false,
    })
    this.logout = this.logout.bind(this);
    // this.isLoggedIn = this.isLoggedIn.bind(this);
    this.showRegisterForm = this.showRegisterForm.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.findUserId = this.findUserId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  //------------------------- AUTH Functions ------------------------//
  // references:
  // https://medium.com/@nick.hartunian/knock-jwt-auth-for-rails-api-create-react-app-6765192e295a
  // JZ react-rails-token-auth repo
  findUserId() {
    const jwt = localStorage.getItem('jwt')
    const decoded = jwtDecode(jwt)
    const userId = decoded.sub
    // this.setState({
    //   user_id: decoded.sub
    // })
    console.log(userId)
    getUser(userId)
      .then(data => this.setState({ user: data }))
  }

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
      .then(this.findUserId())
      .then(() => this.setState({
        isLoggedIn: true,
        currentView: 'Homepage',
      }))
      
      // .then(getUser(this.state.user_id))
      // .then(data => this.setState({ user: data }))
      .catch(err => console.log(err))
  }

  // isLoggedIn() {
  //   const res = !!(localStorage.getItem("jwt"));
  //   this.setState({
  //     isLoggedIn: res,
  //   })
  //   return res;
  // }

  logout() {
    localStorage.removeItem("jwt")
    this.setState({
      isLoggedIn: false,
      name: "",
      email: "",
      user_id: "",
      password: "",
      currentView: 'Login',
    })
  }
  //----------------------- END OF AUTH ----------------------//


  determineWhichToRender() {
    const { currentView } = this.state;

    switch(currentView) {
      case 'Login':
      return <Login onChange={this.handleChange}
                    login={this.login}
                    logout={this.logout}
                    email={this.state.email}
                    password={this.state.password}
                    isRegister={this.state.isRegister}
                    register={this.register}
        />;
      case 'Homepage':
      return <Homepage  username={this.state.username}
                        email={this.state.email} 
                        id={this.state.user_id}
                        user={this.state.user}/>;
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

  // handleSubmit(e) {
    
  // }

  handleView(links) {
    this.setState({
      currentView: links,
    })
  }

  render() {

    const links = [
      'Homepage',
      'Profile',
      'PendingApproval'
    ]

    return (
      <div className="App">
      <Header onClick={this.handleView} 
              links={links}
              logout={this.logout}
              user={this.state.user} />

      {this.determineWhichToRender()}
      </div>
    );
  }
}

export default App;
