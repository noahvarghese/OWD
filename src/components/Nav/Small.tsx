import React, { useState } from "react";
import { pages } from "./pages";
import Logo from "../../assets/img/logo.png";
import "./Small.scss";
import Item from "./Item";
import LinkTracker from "../Routing/LinkTracker";

const SmallNav: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div
            id="SmallNav"
            onMouseLeave={() => {
                if (showMenu) toggleMenu();
            }}
        >
            <div id="SmallNavContainer">
                <button
                    id="menuToggle"
                    className={showMenu ? "open" : ""}
                    onClick={toggleMenu}
                >
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </button>
                <LinkTracker to="/" className="logoContainer">
                    <img src={Logo} alt="Logo" />
                </LinkTracker>
            </div>
            <ul className={showMenu ? "show" : ""}>
                {pages.map((page, index) => (
                    <Item page={page} key={index} large={false} />
                ))}
            </ul>
        </div>
    );
};

export default SmallNav;
