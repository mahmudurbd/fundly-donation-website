import React from 'react';
import './Header.css';
import logo from '../../images/fundly_logo.png';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home"><img className="logo" src={logo} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/benefits">Benefits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/how">How it Works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/fund">Fundraising Ideas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-text">
                <h1>Raise Money For Poor</h1>
                <p>Fundly is fast, easy, and has no raise requirements or start up fees.</p>
                <h2>Total Estimated Donation $100 Milion</h2>
            </div>
        </div>
    );
};

export default Header;