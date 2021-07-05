import React, { useState } from "react";
import Quote from "../assets/img/quotation1.png";
// import Star from "../assets/img/star.png";
import "./Review.scss";
import { ReviewAttributes } from "../data/reviews";
import DropdownArrow from "./Arrows/DropdownArrow";

const Review: React.FC<ReviewAttributes> = (props) => {
    const [display, setDisplay] = useState<boolean>(
        props.review.length <= 140 || false
    );

    return (
        <div className="Review">
            <h2>{props.name}</h2>
            <div className={(display ? "show " : "") + "contents"}>
                <div className="imgContainer">
                    <img src={Quote} alt="quote" />
                </div>
                {/* <div className="rating">
                    <img src={Star} alt="star" />
                    <span>{props.rating}</span>
                </div> */}
                <p className={display ? "show" : ""}>
                    {props.review}
                </p>
                {props.review.length > 140 && (
                    <div className="tail">
                        <DropdownArrow
                            initColor="white"
                            finalColor="white"
                            onClick={() => setDisplay(!display)}
                            show={display}
                        />
                        <span>Show {display ? "Less" : "More"}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;
