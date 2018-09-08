import React from 'react';

function Header(props) {

    return (
        <div>
            <h1>Welcome to Divy</h1>
            <h4>Login or register here:</h4>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Header;
