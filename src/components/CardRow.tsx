import React from "react";
import "./CardRow.scss";

interface CardRowProps {
    img: string;
    description: string;
    title: string;
    children?: JSX.Element;
}
const CardRow: React.FC<CardRowProps> = ({
    description,
    img,
    title,
    children,
}) => {
    return (
        <div className="CardRow">
            <div className="imgContainer">
                <img src={img} alt={title} loading="lazy" />
            </div>
            <div className="contentContainer">
                <h2>{title}</h2>
                <div className="content">
                    <p>{description}</p>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CardRow;
