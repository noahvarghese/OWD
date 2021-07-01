import React from "react";
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
import { isBrowser, isMobile } from "react-device-detect";

export interface NavProps {
    paths: { title: string; path: string }[];
}

const Nav: React.FC<NavProps> = ({ paths }) => {
    const location = useLocation();
    return (
        <nav id="Nav">
            <MediaQuery maxWidth={1365}>
                <SmallNav />
            </MediaQuery>
            <MediaQuery minWidth={1366}>
                <LargeNav />
            </MediaQuery>
            {(isBrowser || isMobile) &&
                // hide subnav because it is empty for the contact page on mobile
                isBrowser &&
                location.pathname !== "/contact" && (
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
