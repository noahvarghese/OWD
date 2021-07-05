import React, { useCallback, useEffect, useState } from "react";
import Quote from "../assets/img/quotation1.png";
// import Star from "../assets/img/star.png";
import "./Review.scss";
import { ReviewAttributes } from "../data/reviews";
import DropdownArrow from "./Arrows/DropdownArrow";

const Review: React.FC<ReviewAttributes> = (props) => {
    const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
    const [pRef, setPRef] = useState<HTMLParagraphElement | null>(null);
    const [display, setDisplay] = useState<boolean>(
        props.review.length <= 140 || false
    );

    const changeHeight = useCallback(
        (_?: any) => {
            if (contentRef !== null && pRef !== null) {
                if (!display) {
                    contentRef.style.height = `${
                        pRef.clientHeight +
                        (props.review.length > 140 ? 7 : 4) * 16
                    }px`;
                } else {
                    contentRef.style.height = "max-content";
                }
            }
        },
        [contentRef, pRef, props.review.length, display]
    );

    useEffect(() => {
        if (contentRef !== null && pRef !== null) {
            changeHeight();
            try {
                window.removeEventListener("resize", changeHeight);
            } catch (_) {}

            window.addEventListener("resize", changeHeight);
        }
    }, [contentRef, pRef, changeHeight]);

    return (
        <div className="Review">
            <h2>{props.name}</h2>
            <div className="contents" ref={setContentRef}>
                <div className="imgContainer">
                    <img src={Quote} alt="quote" />
                </div>
                {/* <div className="rating">
                    <img src={Star} alt="star" />
                    <span>{props.rating}</span>
                </div> */}
                <p ref={setPRef} className={display ? "show" : ""}>
                    {props.review.length > 140
                        ? display
                            ? props.review
                            : props.review.substr(0, 140)
                        : props.review}
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
