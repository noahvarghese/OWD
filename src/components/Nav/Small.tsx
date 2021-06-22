import React, { useState } from "react";
import { pages } from "./pages";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Small.scss";

const SmallNav: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

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
            <ul className={showMenu ? "show" : ""}>
                {pages.map((page, index) => (
                    <li key={index}>
                        <Link to={page.path}>{page.title}</Link>
                        {page.subMenu ? (
                            <div className="SmallSubMenuContainer">
                                {" "}
                                {page.subMenu.map((sub) => {
                                    return (
                                        <>
                                            <h4>{sub.title}</h4>
                                            <ul>
                                                {sub.list.map(
                                                    (item, listIndex) => (
                                                        <li key={listIndex}>
                                                            <Link
                                                                to={item.path}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    );
                                })}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SmallNav;
