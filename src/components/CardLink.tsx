import React from "react";
import { Link } from "react-router-dom";
import DirectionalArrow from "./Arrows/DirectionalArrow";
import "./CardLink.scss";

export interface CardProps {
    img: string;
    title: string;
    description?: string;
    to?: string;
}

const CardLink: React.FC<CardProps> = ({ description, img, title, to }) => {
    if (to) {
        return (
            <Link to={to} className="CardLink">
                <div className="imgContainer">
                    <img src={img} alt={title} loading="lazy" />
                </div>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
                <DirectionalArrow direction="right" />
            </Link>
        );
    } else {
        return (
            <div className="CardLink">
                <div className="imgContainer">
                    <img src={img} alt={title} loading="lazy" />
                </div>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
        );
    }
};

export default CardLink;