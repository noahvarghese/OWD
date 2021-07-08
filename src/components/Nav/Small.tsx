import React, { useCallback, useEffect, useState } from "react";
import { pages } from "../../data/pages";
import Logo from "../../assets/img/logo.png";
import "./Small.scss";
import Item from "./Item";
import { Link, useLocation } from "react-router-dom";

const SmallNav: React.FC = () => {
    const location = useLocation();

    const getActiveTitle = useCallback(
        (): string =>
            (
                pages.find((page) => {
                    const pathPieces = page.path.split("/");
                    const locationPieces = location.pathname.split("/");
                    console.log(page.path);
                    console.log(location.pathname);
                    if (pathPieces.length !== locationPieces.length)
                        return false;

                    for (let i = 0; i < pathPieces.length; i++) {
                        if (pathPieces[i] !== locationPieces[i]) return false;
                    }
                    return true;
                }) ?? pages.find((page) => page.path === "/")!
            ).title,
        [location]
    );

    const [active, setActive] = useState(getActiveTitle());

    useEffect(() => {
        setActive(getActiveTitle());
    }, [location, getActiveTitle]);

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
                <Link to="/" className="logoContainer">
                    <img src={Logo} alt="Logo" loading="eager" />
                </Link>
            </div>
            <ul className={showMenu ? "show" : ""}>
                {pages.map((page, index) => (
                    <Item
                        classes={active === page.title ? ["active"] : []}
                        onClick={() => setActive(page.title)}
                        page={page}
                        key={index}
                        large={false}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SmallNav;
