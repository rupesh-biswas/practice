import React, { Fragment } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar(props) {
    const { dogs } = props;
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dogs">
                    Dog App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {dogs.map((dog, i) => (
                            <li key={i} className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navbar