import React, { useCallback, useEffect, useState } from "react";
import "./Large.scss";
import Logo from "../../assets/img/logo.png";
import Item from "./Item";
import { pages } from "../../data/pages";
import { Link, useLocation } from "react-router-dom";

const LargeNav: React.FC = () => {
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

    return (
        <div id="LargeNav">
            <Link to="/" className="logoContainer">
                <img src={Logo} alt="logo" loading="eager" />
            </Link>
            <ul>
                {pages.map((page, index) => (
                    <Item
                        classes={active === page.title ? ["active"] : []}
                        onClick={() => setActive(page.title)}
                        page={page}
                        key={index}
                        large={true}
                    />
                ))}
            </ul>
        </div>
    );
};

export default LargeNav;
