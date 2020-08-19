import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map((dog) => (
            <li className="nav-item" key={dog.name}>
                <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
                    {dog.name}
                </NavLink>
            </li>
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Dogs!
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/dogs" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        );
    }
}
