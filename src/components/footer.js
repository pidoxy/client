import React from "react";
import logo from "../logo.svg"

const Footer = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} footer`}>
            <div className="container">
                <div className={`row text-left`}>
                    <div className={`col-12 col-md`}>
                        <div className="pl-md-3 pl-0 pb-4">

                            <a className="" href="#home" ><img src={logo} alt="logo" /></a>

                        </div>
                    </div>
                    <div className={`col`}>
                        <div>
                            <a href="#faq">FAQ</a>
                        </div>
                        <div>
                            <a href="#about">About Us</a>
                        </div>
                        <div>
                            <a href="#services">Our Services</a>
                        </div>
                        <div>
                            <a href="mailto:graceworthresources@yahoo.com">Email</a>
                        </div>
                    </div>
                    <div className={`col`}>
                        <div>
                            <h4>Contact Us</h4>
                        </div>
                        
                        <div>
                            <a href="tel:+234 8024541810">+234 8024541810</a><br />
                            <a href="tel:+234 9095538594">+234 9095538594</a><br />
                            <a href="tel:+234 7015124587">+234 7015124587</a>

                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-0" />
            <div className="col-12 container-fluid text-center">
                <p className="text-center pb-1 pt-1 m-0">©Copyright&nbsp;2021- Graceworths</p>
            </div>
        </div>
    );
};

export default Footer;
