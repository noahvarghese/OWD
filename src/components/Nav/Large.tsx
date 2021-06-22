import React from "react";
import { Link } from "react-router-dom";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";
import Item from "./Item";
import { pages } from "./pages";

const LargeNav: React.FC = () => {
    return (
        <div id="LargeNav">
            <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" />
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
