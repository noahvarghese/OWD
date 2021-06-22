import React, { useEffect, useState } from "react";
import { getNavMapping } from "./pages";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Small.scss";

const SmallNav: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        document
            .getElementsByTagName("body")[0]
            .addEventListener("click", () => {
                if (showMenu) toggleMenu();
            });
    }, []);

    return (
        <div id="SmallNav">
            <div id="SmallNavContainer">
                <button id="menuToggle" onClick={toggleMenu}>
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </button>
                <Link to="/" className="logoContainer">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul className={showMenu ? "show" : ""}>{getNavMapping(false)}</ul>
        </div>
    );
};

export default SmallNav;
