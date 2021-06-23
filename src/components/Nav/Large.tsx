import React from "react";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";
import Item from "./Item";
import { pages } from "./pages";
import LinkTracker from "../Routing/LinkTracker";

const LargeNav: React.FC = () => {
    return (
        <div id="LargeNav">
            <LinkTracker to="/" className="logoContainer">
                <img src={Logo} alt="logo" />
            </LinkTracker>
            <ul>
                {pages.map((page, index) => (
                    <Item page={page} key={index} large={true} />
                ))}
            </ul>
        </div>
    );
};

export default LargeNav;
