import React from "react";
import logo from "../logo.svg"

const Footer = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} footer`}>
            <div className={`row text-left`}>
                <div className={`col-12 col-md`}>
                    <div className="pl-md-3 pl-0 pt-4 mt-1 pb-4">

                        <a className="" href="https://discord.com/invite/J3Hcfdc" ><img src={logo} alt="logo" /></a>
                        
                    </div>
                </div>
                <div className={`col`}>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">FAQ</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">About Us</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">Our Services</a>
                    </div>
                </div>
                <div className={`col`}>
                    <div>
                        <h4>Contact Us</h4>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">Email</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">TEL:</a>
                    </div>
                </div>
            </div>
            <hr className="m-0" />
            <div class="col-12 container-fluid text-center">
                <p className="text-center pb-1 pt-1 m-0">©Copyright-&nbsp;Graceworths</p>
            </div>
        </div>
    );
};

export default Footer;
