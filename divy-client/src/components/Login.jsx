import React from 'react';

// Function: Login for a user to interact with their profile and transactions
// Refernece from Jay-Z Auth lesson in rails
function Login(props) {
    return (
    <div className="columns is-centered">
      <div className="column is-one-fifth">
        <form>
            <label htmlFor="email" className="label">Email: </label>
            <input className="input is-rounded is-hovered"
                name="email"
                onChange={props.onChange}
                value={props.email.value}
                type="email"
                placeholder="Email"
            />
            <br /><br />
            <label htmlFor="password" className="label">Password:</label>
            <input className="input is-rounded is-hovered"
                name="password"
                onChange={props.onChange}
                value={props.password.value}
                type="password"
                placeholder="Password"
            />
        </form>
        <br />
        <button className="button is-primary is-hovered is-small" onClick={props.register}>Register</button> | <button className="button is-primary is-small is-hovered" onClick={props.login}>Login</button>
      </div>
    </div>  
  )
}

export default Login
