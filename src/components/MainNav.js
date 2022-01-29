import React from "react";
import { NavLink } from "react-router-dom";

class MainNav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <h1 className="site-title">Amazons</h1>
                <NavLink className="main-nav-link" to="/">Home</NavLink>
                <NavLink className="main-nav-link" to="/play">Play</NavLink>
            </div>
        )
    }
}

export default MainNav
