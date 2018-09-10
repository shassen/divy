import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <div>
            {
                props.loggedIn ?
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div>
                            <div className="navbar-brand">
                                <button className="navbar-item button is-primary" onClick={() => props.onClick(links[0])}>Divy</button>
                                <button className="navbar-item button is-primary" onClick={() => props.onClick(links[1])}>{props.user.username}</button>
                                {/* <h3 onClick={() => props.onClick(links[2])}>Pending({})</h3> */}
                                <button className="navbar-item button is-primary" onClick={props.logout}>Logout</button>
                        
                            </div>
                        </div>
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
