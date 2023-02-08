import React from "react";

const NavBar = () => {
	return (
        <div class="container-fluid m-0 p-0">
            <nav className="navbar navbar-expand navbar-light bg-dark fixed-top px-5">
                <a className="navbar-brand text-white col-10" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse col-2" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
            </nav>
        </div>
	);
};

export default NavBar;