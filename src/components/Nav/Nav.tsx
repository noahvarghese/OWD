import React from "react";
import Home from "../../assets/img/home.png";
import MediaQuery from "react-responsive";
import LargeNav from "./Large";
import SmallNav from "./Small";
import PrimaryButton from "../Button/PrimaryButton";
import "./Nav.scss";
import LinkTracker from "../Routing/LinkTracker";

export interface NavProps {
    component: () => JSX.Element;
}

const Nav: React.FC = () => {
    return (
        <nav id="Nav">
            <MediaQuery maxWidth={1365}>
                <SmallNav />
            </MediaQuery>
            <MediaQuery minWidth={1366}>
                <LargeNav />
            </MediaQuery>
            <div id="subNav">
                <p id="breadcrumbs">
                    <LinkTracker to="/" id="Home">
                        <img src={Home} alt="Home" />
                    </LinkTracker>
                </p>
                <PrimaryButton text="Request a quote" link="/contact" />
            </div>
        </nav>
    );
};

export default Nav;
