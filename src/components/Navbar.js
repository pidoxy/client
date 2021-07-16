import React from "react";
import '../Jquery';
import logo from "../logo.svg";


const Navbar = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} navbar_page`}>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light light">
                <a style={{ color: 'white' }} className="pl-md-4 navbar-brand" href="#home"><img className="mx-3 ms-0" style={{ height: '40px' }} src={logo} alt="logo" />GRACEWORTHS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto pl-md-4 t-w">
                        <li className="nav-item">
                            <a className="nav-link" href={`#home`}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`#about`}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`#services`}>Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`#faq`}>FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;
