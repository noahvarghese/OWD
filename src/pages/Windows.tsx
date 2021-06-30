import React from "react";
import Hero from "../assets/img/window_banner.png";
import CardLink from "../components/CardLink";
import { materials } from "../data/products/windows/materials";
import { styles } from "../data/products/windows/styles";
import "./page.scss";
import "./Windows.scss";

const imageURL = `${process.env.PUBLIC_URL}/windows/`;

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
            <div className="styles">
                <h2>Styles</h2>
                <div className="cards">
                    {styles.map((style) => (
                        <CardLink
                            to={style.to}
                            img={imageURL + style.img}
                            title={style.name}
                        />
                    ))}
                </div>
            </div>
            <div className="materials">
                <h2>Materials</h2>
                <div className="cards">
                    {materials.map((mat) => (
                        <CardLink
                            to={mat.to}
                            img={imageURL + mat.img}
                            title={mat.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Windows;
