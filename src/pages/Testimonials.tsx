import React from "react";
import Review from "../components/Review";
import { reviews } from "../data/reviews";
import "./page.scss";
import "./Testimonials.scss";
import Hero from "../assets/img/testimonials.jpg";

const Testimonials: React.FC = (props) => {
    return (
        <div id="Testimonials" className="page">
            {/* <div className="hero">
                <div className="imgContainer">
                    <img src={Hero} alt="hero" />
                </div>
            </div> */}
            <div className="blurb">
                <h1>Testimonials</h1>
                <p>
                    Here at Oakville Windows & Doors we believe that our
                    community is what makes us special. Check out some of the
                    comments left by members of your community!
                </p>
            </div>
            <div className="cards">
                {reviews.map((rev, index) => (
                    <Review
                        key={rev.name.replaceAll(" ", "") + index}
                        {...rev}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
