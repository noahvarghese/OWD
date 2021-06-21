import React from "react";
import Home from "../../assets/img/home.png";
import MediaQuery from "react-responsive";
import LargeNav from "./Large";
import SmallNav from "./Small";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";
import "./Nav.scss";

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
                    <Link to="/" id="Home">
                        <img src={Home} alt="Home" />
                    </Link>
                </p>
                <PrimaryButton text="Request a quote" link="/contact" />
            </div>
        </nav>
    );
};

export default Nav;
