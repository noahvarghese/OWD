import React, { useCallback, useEffect, useState } from "react";
import Quote from "../assets/img/quotation1.png";
// import Star from "../assets/img/star.png";
import "./Review.scss";
import { ReviewAttributes } from "../data/reviews";
import DropdownArrow from "./Arrows/DropdownArrow";

const Review: React.FC<ReviewAttributes> = (props) => {
    const [display, setDisplay] = useState<boolean>(
        props.review.length <= 140 || false
    );

    const [pRef, setPRef] = useState<HTMLParagraphElement | null>(null);

    const [minHeight, setMinHeight] = useState(-1);
    const [maxHeight, setMaxHeight] = useState(Infinity);

    const reset = useCallback(() => {
        if (pRef) {
            if (pRef.classList.contains("show") === false) {
                pRef.style.maxHeight = "max-content";
                pRef.textContent = props.review.substring(0, 140);
                setMinHeight(pRef.clientHeight);
                console.log(pRef.clientHeight);
                // pRef.style.maxHeight = pRef.clientHeight + "px";
                pRef.textContent = props.review;
                setMaxHeight(pRef.clientHeight);
                console.log(pRef.clientHeight);
                pRef.style.maxHeight = minHeight + "px";
            }
        }
    }, [pRef, props.review, minHeight]);

    useEffect(() => {
        window.addEventListener("resize", (_) => reset());
    }, [reset]);

    const calcSize = (
        el: HTMLElement | null,
        max: number,
        min: number,
        review: string,
        disp: boolean
    ) => {
        if (el && max === Infinity && min === -1) {
            // calculate max and min height
            el.textContent = review.substring(0, 140);
            const newMin = el.clientHeight;
            setMinHeight(newMin);
            el.textContent = review;
            const newMax = el.clientHeight;
            setMaxHeight(newMax);

            if (!disp) {
                if (el.classList.contains("show")) {
                    el.classList.remove("show");
                }
                el.style.maxHeight = newMin + "px";
            } else {
                if (el.classList.contains("show") === false) {
                    el.classList.add("show");
                }
            }
            console.log(newMin, newMax);
        }
    };

    useEffect(() => {
        // Initial calculation
        calcSize(pRef, maxHeight, minHeight, props.review, display);
    }, [display, pRef, maxHeight, minHeight, props.review]);

    useEffect(() => {
        // responsible for toggling view
        if (pRef && maxHeight !== Infinity && minHeight !== -1) {
            if (display) {
                pRef.classList.add("show");
            } else {
                pRef.classList.remove("show");
            }
        }
    }, [display, minHeight, maxHeight, pRef]);

    // Need to make sure the reviews show all 140 characters and animate up and down
    // get content height of desired state (somehow?)
    // get desired height (use lineheight probably)
    // while (current height != desired height)
    // set timeout and adjust p tag height with promise (async/await)
    // once height is what is desired change content to make sure the review is either fully viewable or 140 characters
    // also need to do something with the flex detection as some items are out of sync by some pixels

    return (
        <div className="Review">
            <h2>{props.name}</h2>
            <div className="contents">
                <div className="imgContainer">
                    <img src={Quote} alt="quote" />
                </div>
                <p ref={setPRef}>
                    {props.review.length > 140
                        ? props.review.substring(0, 140)
                        : props.review}
                </p>
                {props.review.length > 140 && (
                    <div className="tail">
                        <DropdownArrow
                            initColor="white"
                            finalColor="white"
                            onClick={() => {
                                setDisplay(!display);
                            }}
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
