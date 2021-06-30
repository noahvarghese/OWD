import React, { useState } from "react";
import CommercialHero from "../assets/img/commercial/divider.jpg";
import Office from "../assets/img/commercial/officeSpace.png";
import Educational from "../assets/img/commercial/officesEducational.png";
import Healthcare from "../assets/img/commercial/healthcare.png";
import Reception from "../assets/img/commercial/receptionAreas.png";
import Partition from "../assets/img/commercial/partitionOffices.png";
import Distancing from "../assets/img/commercial/cubicle.png";
import "./Commercial.scss";
import "./page.scss";

const CommercialCard: React.FC<{
    image: string;
    name: string;
    description: string;
    backItems: string[];
    backImage: string;
}> = (props) => {
    const className = props.name.replaceAll(" ", "");

    return (
        <div className={className + " CommercialCard"}>
            <div className="innerCard">
                <div className="frontCard">
                    <h2>{props.name}</h2>
                    <div className="imgContainer">
                        <img
                            src={props.image}
                            alt={props.name.replaceAll(" ", "")}
                        />
                    </div>
                    <p>{props.description}</p>
                </div>
                <div className={className + " backCard"}>
                    <div className="imgContainer">
                        <img src={props.backImage} alt={props.name} />
                    </div>
                    <ul>
                        {props.backItems.map((item) => (
                            <li key={item.replaceAll(" ", "")}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Commercial: React.FC = () => {
    return (
        <div id="Commercial" className="page">
            <div className="hero">
                <div className="imgContainer">
                    <img src={CommercialHero} alt="Hero" />
                </div>
            </div>
            <div className="blurb">
                <h1>Commercial Services</h1>
                <h2>
                    Oakville Windows & Doors has partnered with Rho to offer
                    services for your business!
                </h2>
                <p>
                    For over 20 years, Rho has been creating compelling modular
                    designs for office spaces, trade shows, and retail
                    businesses all over Canada. A lot has changed in a very
                    short period and there will be challenges ahead as we work
                    hard to move forward to a new normal. It will require us to
                    be supportive, encouraging, inventive and responsive. Our
                    world has changed. We must support our frontline healthcare
                    providers. We must encourage those in leadership as they
                    work hard to make wise choices. We must be inventive as find
                    new ways to support business and community in healthy ways.
                    Finally, we must be responsive in meeting needs quickly.
                </p>
                <p>
                    These extraordinary times require us to reinvent the way we
                    operate our business. Rho have retooled our facilities and
                    repurposed our expertise to meet the challenges that
                    healthcare, education and business will be facing in this
                    new normal. Keeping staff and employees safe while working,
                    creating a safer environment for patients, clients and
                    customers, turning open concept offices into safer office
                    spaces will help Canada move forward and open the economy in
                    safer ways.
                </p>
                <p>
                    Our Made in Canada solutions will help you meet the new
                    needs of today’s reality and position you for a brighter
                    tomorrow. Our system is a proven architectural product that
                    can transform any space into the space you need to help keep
                    staff, patients, and customers safe and protected. Let us
                    show you how we can help you meet tomorrows challenges
                    today.
                </p>
            </div>
            <div className="cards">
                <CommercialCard
                    image={Office}
                    name="Offices / Educational"
                    description="Learn how you can make your office and educational spaces safer"
                    backItems={[
                        "Easily create new offices that maintain safe social distancing",
                        "Easily convert large office spaces into smaller offices",
                        "Floor to ceiling modular walls can be designed to fit any environment",
                        "Use of plexiglass maintains openness, lets in more natural light and ensures clear sight lines",
                        "Custom colours to match your existing office",
                        "Lockable doors for security",
                        "Easily create new office work stations that maintain safe social distancing",
                        "Convert open concept offices into enclosed work stations",
                        "Lockable doors for each workstation can be easily added",
                        "Maintain hygiene with surfaces that are easily wiped clean",
                    ]}
                    backImage={Educational}
                />
                <CommercialCard
                    image={Healthcare}
                    name="Healthcare"
                    description="Easily create safe workspaces for healthcare and essential businesses"
                    backImage={Reception}
                    backItems={[
                        "Easily create safe work spaces for healthcare and essential businesses",
                        "Lockable sliding doors to maximize space",
                        "Floor to ceiling enclosure minimizes airflow",
                        "Quickly create secure environments for testing, isolating and assessments",
                        "Medical grade surfaces for thorough cleaning",
                        "Custom colours to match your existing office",
                        "Use of plexiglass help to easily monitor those inside",
                        "Quickly create safe assessment areas for healthcare centres",
                        "Ensure reception staff is protected from the general public",
                        "Floor to ceiling enclosures minimizes airflow",
                        "Control access with lockable doors",
                    ]}
                />

                <CommercialCard
                    image={Distancing}
                    name="Safe Distancing"
                    description="Easily divide and partition any work space to create a safer work area."
                    backImage={Partition}
                    backItems={[
                        "Easily divide and partition any work spaceto create a safer work area for you andthe community you serve.",
                        "Easily deployed mobile dividers control traffic flow in any direction required",
                        "Create quick temporary isolation areas",
                        "Clear glass for security and monitoring",
                        "Can be partly or fully frosted for privacy if required",
                        "Lockable wheels for stability",
                    ]}
                />
            </div>
        </div>
    );
};

export default Commercial;
