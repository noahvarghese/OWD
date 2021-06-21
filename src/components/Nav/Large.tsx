import React from "react";
import { pages } from "./pages";
import { Link } from "react-router-dom";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";

const LargeNav: React.FC = () => {
    return (
        <div id="LargeNav">
            <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" />
            </Link>
            <ul>
                {pages.map((page, index) => (
                    <li key={index}>
                        <Link to={page.path}>{page.title}</Link>
                        {page.subMenu ? (
                            <div className="LargeSubMenuContainer">
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

export default LargeNav;
