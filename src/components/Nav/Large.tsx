import React from "react";
import { Link } from "react-router-dom";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";
import { getNavMapping } from "./pages";

const LargeNav: React.FC = () => {
    return (
        <div id="LargeNav">
            <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" />
            </Link>
            <ul>{getNavMapping(true)}</ul>
        </div>
    );
};

export default LargeNav;
