import React from "react";
import Hero from "../assets/img/doorlight2000.png";
import Window from "../assets/img/windowOrange.png";
import Door from "../assets/img/doorOrange.png";
import Repair from "../assets/img/wrenchOrange.png";
import LocalMatters from "../assets/img/support_local.png";
import Pricing from "../assets/img/financing.png";
import Showroom from "../assets/img/storeFront.png";
import Warranty from "../assets/img/warranty.png";
import "./page.scss";
import "./Home.scss";
import CardLink from "../components/CardLink";
import CardRow from "../components/CardRow";

const Home = () => {
    return (
        <div id="Home" className="page">
            <div className="hero">
                <div className="imgContainer">
                    <img src={Hero} alt="Showroom" loading="lazy" />
                    <div className="filter"></div>
                </div>
            </div>
            <div className="cards">
                <CardLink
                    to="/windows"
                    img={Window}
                    title="Windows"
                    description="Choose from a selection of vinyl and wood windows"
                />
                <CardLink
                    to="/doors"
                    img={Door}
                    title="Doors"
                    description="Choose from a selection of fibreglass and steel doors"
                />
                <CardLink
                    to="/repairs"
                    img={Repair}
                    title="Repairs"
                    description="We provide efficient quality and friendly repair services"
                />
            </div>
            <p>
                Oakville Windows & Doors is a small family business which sells
                directly to the public. No commission or high pressure sales
                tactics. Our team is made up of caring, personable individuals
                with a dedication to our customers and our company
            </p>

            <div className="rows">
                <CardRow
                    img={LocalMatters}
                    title="Local Matters"
                    description="We are proud to partner with local Canadian manufacturers. We are a local family owned business, committed to providing care and service for our community"
                />
                <CardRow
                    img={Pricing}
                    title="Pricing Options"
                    description="We accept cash, debit, credit and offer monthly payment options to fit your needs"
                />
                <CardRow
                    img={Showroom}
                    title="Showroom"
                    description="Visit our showroom and meet with our experienced team who will help you find the style, materials and sizw that works best for your home and your needs"
                />
                <CardRow
                    img={Warranty}
                    title="Warranty"
                    description="We offer an extended warranty through our manufacturers"
                    children={
                        <div className="links">
                            {/* Need to link to actual pdfs */}
                            <a href="#">Palma - Doors</a>
                            <a href="#">Vinylbilt - Windows</a>
                            <a href="#">Dayside - Windows</a>
                            <a href="#">Martin - Windows</a>
                        </div>
                    }
                />
            </div>
            <p>
                When it comes to windows and doors, there's no such thing as a
                one-size-fits-all solution. That's why our experienced team will
                work with you one-on-one from day one to find the style,
                material and size that works best for your home and your needs.
                We carry full insurance and our workers are covered by WSIB.
            </p>
        </div>
    );
};

export default Home;
