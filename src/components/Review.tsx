import React, { useCallback, useEffect, useState } from "react";
import Quote from "../assets/img/quotation1.png";
// import Star from "../assets/img/star.png";
import "./Review.scss";
import { ReviewAttributes } from "../data/reviews";

const Review: React.FC<ReviewAttributes> = (props) => {
    const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
    const [pRef, setPRef] = useState<HTMLParagraphElement | null>(null);

    const changeHeight = useCallback(
        (e?: any) => {
            if (contentRef !== null && pRef !== null) {
                contentRef.style.height = `${pRef.clientHeight + 4 * 16}px`;
            }
        },
        [contentRef, pRef]
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
                <p ref={setPRef}>
                    {props.review.length > 140
                        ? props.review.substr(0, 140)
                        : props.review}
                </p>
                <div className="tail"></div>
            </div>
        </div>
    );
};

export default Review;
