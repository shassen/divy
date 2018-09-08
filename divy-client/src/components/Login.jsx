import React from 'react';

// Function: Login for a user to interact with their profile and transactions
// Refernece from Jay-Z Auth lesson in rails
function Login(props) {
    return (
    <div className="login-form">
        <form>
            <label htmlFor="email">Email: </label>
            <br />
            <input
                name="email"
                onChange={props.handleChange}
                value={props.email.value}
                type="email"
            />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
                name="password"
                onChange={props.handleChange}
                value={props.password.value}
                type="password"
            />
        </form>
        <br />
        <button onClick={props.register}>Register</button> | <button onClick={props.login}>Login</button>
    </div>  
  )
}

export default Login
