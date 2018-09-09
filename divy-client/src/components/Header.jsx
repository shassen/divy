import React from 'react';

function Header(props) {
    const { links } = props;
    console.log(props)
    return (
        <div>
            {
                props.loggedIn ?
                    <div>
                        <h1 onClick={() => props.onClick(links[0])}>Divy</h1>
                        <h1 onClick={() => props.onClick(links[1])}>{props.user.username}</h1>
                        <h3 onClick={() => props.onClick(links[2])}>Pending({})</h3>
                    </div>
                    :
                    <div>
                        <h1>Divy</h1>
                        <h1>Please login</h1>
                    </div>
            }
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Header;
