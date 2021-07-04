import React, { useEffect, useState } from "react";
import Home from "../../assets/img/home.png";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import LargeNav from "./Large";
import SmallNav from "./Small";
import PrimaryButton from "../Button/PrimaryButton";
import "./Nav.scss";
import { connect } from "react-redux";
import { State } from "../../types/state";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export interface NavProps {
    paths: { title: string; path: string }[];
}

const Nav: React.FC<NavProps> = ({ paths }) => {
    const [showNav, setShowNav] = useState(true);

    const location = useLocation();

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
            <MediaQuery maxWidth={1365}>
                <SmallNav />
            </MediaQuery>
            <MediaQuery minWidth={1366}>
                <LargeNav />
            </MediaQuery>
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
