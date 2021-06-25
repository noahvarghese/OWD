import React from "react";
import Instagram from "../assets/img/instagram.png"
import Facebook from "../assets/img/facebook.png"
import LinkedIn from "../assets/img/linkedin.png"
import Mail from "../assets/img/mail.png"
import Location from "../assets/img/location.png";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer id="Footer">
            <div className="row">
                <div className="locationContainer">
                    <div className="imgContainer">
                        <img src={Location} alt="location" />
                    </div>
                    <h3>1380 Speers Rd Unit #7<br />Oakville, Ontario</h3>
                </div>
                <div className="socialMedia">
                    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank"><img src={Instagram} alt="Facebook" /></a>
                    <a href="https://facebook.com" rel="noopener noreferrer" target="_blank"><img src={Facebook} alt="Facebook" /></a>
                    <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank"><img src={LinkedIn} alt="Facebook" /></a>
                    {/* <a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><img src={Twitter} alt="Twitter" /></a> */}
                    <a href="mailto:info@oakvillewindows.com" rel="noopener noreferrer" target="_blank"><img src={Mail} alt="Facebook" /></a>
                </div>
            </div>
            <p>"Helping people find the perfect window or door since 2010"</p>
            <p>&#169; Oakville Windows & Doors 2021</p>
        </footer>
    );
};

export default Footer;
