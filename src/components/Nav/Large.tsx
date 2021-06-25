import React from "react";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";
import Item from "./Item";
import { pages } from "./pages";
import { Link } from "react-router-dom";

const LargeNav: React.FC = () => {
    return (
        <div id="LargeNav">
            <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" loading="eager" />
            </Link>
            <ul>
                {pages.map((page, index) => (
                    <Item page={page} key={index} large={true} />
                ))}
            </ul>
        </div>
    );
};

export default LargeNav;
