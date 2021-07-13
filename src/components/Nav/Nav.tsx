import React, { useCallback, useEffect, useState } from "react";
import Home from "../../assets/img/home.png";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { useMediaQuery } from "react-responsive";
import PrimaryButton from "../Button/PrimaryButton";
import "./Nav.scss";
import { connect } from "react-redux";
import { State } from "../../types/state";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { pages } from "../../data/pages";
import Item from "./Item";

export interface NavProps {
    paths: { title: string; path: string }[];
}

const Nav: React.FC<NavProps> = ({ paths }) => {
    const [showNav, setShowNav] = useState(true);
    const location = useLocation();
    const isLarge = useMediaQuery({ query: "(min-width: 1380px)" });

    const getActiveTitle = useCallback(
        (): string =>
            (
                pages.find((page) => {
                    const pathPieces = page.path.split("/");
                    const locationPieces = location.pathname.split("/");
                    if (pathPieces.length !== locationPieces.length)
                        return false;

                    for (let i = 0; i < pathPieces.length; i++) {
                        if (pathPieces[i] !== locationPieces[i]) return false;
                    }
                    return true;
                }) ?? pages.find((page) => page.path === "/")!
            ).title,
        [location.pathname]
    );

    const [active, setActive] = useState(getActiveTitle());

    useEffect(() => {
        const title = getActiveTitle();
        console.log(title);
        setActive(title);
    }, [getActiveTitle]);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        // hide subnav because it is empty for the contact page on mobile
        if (showNav === true) {
            if (isMobile && location.pathname === "/contact") {
                setShowNav(false);
            }
        } else {
            if (isMobile) {
                if (location.pathname === "/contact") {
                    return;
                }
            }
            setShowNav(true);
        }
    }, [location, showNav]);

    return (
        <nav id="Nav">
            <div
                id={`${isLarge ? "Large" : "Small"}Nav`}
                onMouseLeave={() => {
                    if (showMenu && !isLarge) toggleMenu();
                }}
            >
                {isLarge ? (
                    <Link to="/" className="logoContainer">
                        <img src={Logo} alt="logo" loading="eager" />
                    </Link>
                ) : (
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
                        <Link to="/" className="logoContainer">
                            <img src={Logo} alt="Logo" loading="eager" />
                        </Link>
                    </div>
                )}
                <ul className={showMenu && !isLarge ? "show" : ""}>
                    {pages.map((page, index) => (
                        <Item
                            classes={active === page.title ? ["active"] : []}
                            page={page}
                            key={index}
                            large={isLarge}
                        />
                    ))}
                </ul>
            </div>
            {showNav && (
                <div id="subNav">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/" id="Home">
                                <img src={Home} alt="Home" loading="lazy" />
                            </Link>
                        </li>
                        {paths.map((path) => (
                            <li key={path.title} className="path">
                                <Link to={path.path}>{path.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <PrimaryButton text="Request a quote" link="/contact" />
                </div>
            )}
        </nav>
    );
};

export default connect(
    ({ path }: State) => ({ paths: path }),
    (_) => ({})
)(Nav);
