import React from "react";
import Hero from "../assets/img/window_banner.png";
import CardLink from "../components/CardLink";
import Wood from "../assets/img/wood.png";
import Vinyl from "../assets/img/vinyl.png";
import "./page.scss";
import "./Windows.scss";

const Windows = () => {
    return (
        <div id="Windows" className="page">
            <div className="hero">
                <div className="imgContainer">
                    <img src={Hero} alt="Showroom" loading="lazy" />
                    <div className="filter"></div>
                </div>
            </div>
            <div className="blurb">
                <h1>Windows</h1>
                <p>
                    If you're looking for a window installation by a
                    knowledgable experienced and family owned company, Oakville
                    Windows & Doors can help. Our experienced team can help you
                    choose the best type of window for your home's look and your
                    family's needs.
                </p>
            </div>
            <div className="materials">
                <h2>Materials</h2>
                <div className="cards">
                    <CardLink to="/windows/wood" img={Wood} title="Wood" />
                    <CardLink to="/windows/vinyl" img={Vinyl} title="Vinyl" />
                </div>
            </div>
            <div className="styles">
                <h2>Styles</h2>
                <div className="cards">
                    <CardLink to="/windows/wood" img={Wood} title="Wood" />
                    <CardLink to="/windows/vinyl" img={Vinyl} title="Vinyl" />
                </div>
            </div>
        </div>
    );
};

export default Windows;
