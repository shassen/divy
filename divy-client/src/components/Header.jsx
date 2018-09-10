import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <div>
            {
                props.loggedIn ?
                <nav className="navbar" role="navigation" aria-label="main navigation">
                
                    <div className="navbar-brand">
                        <a className="navbar-item" onClick={() => props.onClick(links[0])}>Divy</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                        <a onClick={() => props.onClick(links[1])}>{props.user.username}</a>
                        </div>
                        {/* <h3 onClick={() => props.onClick(links[2])}>Pending({})</h3> */}
                        <a className="navbar-item" onClick={props.logout}>Logout</a>
                    </div>
                    
                </nav>
                    :
                    <div>
                        <h1>Divy</h1>
                        <h1>Please login</h1>
                    </div>
            }
            
        </div>
    )
}

export default Header;
