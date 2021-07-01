import React from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Notification from "../components/Notification";
import "./page.scss";
import "./Contact.scss";
import FileInput from "../components/FileInput";
import { useState } from "react";

const Contact: React.FC = () => {
    const [submitted, setSub] = useState(false);

    return (
        <div id="Contact" className="page">
            <h1>Contact Us</h1>
            <div className="contents">
                <form>
                    <div className="inputs">
                        <Input
                            type="text"
                            placeholder="first name"
                            required={true}
                            name="firstName"
                        />
                        <Input
                            type="text"
                            placeholder="last name"
                            required={true}
                            name="lastName"
                        />
                        <Input
                            type="email"
                            placeholder="e-mail"
                            required={true}
                            name="email"
                        />
                        <Input
                            type="phone"
                            placeholder="phone"
                            required={true}
                            name="phone"
                        />
                        <Input
                            type="text"
                            placeholder="city"
                            required={true}
                            name="city"
                        />
                    </div>
                    <div className="checkboxes">
                        <p>
                            <strong>Products of Interest</strong>
                        </p>
                        <div>
                            <Checkbox name="Windows" />
                            <Checkbox name="Entry" label="Entry Door System" />
                            <Checkbox name="Patio" label="Patio Door System" />
                            <Checkbox
                                name="Garage"
                                label="Garage Door System"
                            />
                            <Checkbox name="Repairs" />
                            <Checkbox name="Commercial" />
                            <Checkbox name="Other" />
                        </div>
                    </div>
                    <div className="textAreaContainer">
                        <textarea
                            id="message"
                            placeholder="message"
                            name="message"
                        ></textarea>
                        <svg preserveAspectRatio="none">
                            <rect x={0} y={0} width="100%" height="100%" />
                        </svg>
                    </div>
                    <span>
                        <em>Add optional images here</em>
                    </span>
                    <FileInput
                        name="images"
                        label="Drag and drop files, or click to select"
                        multipleFiles={true}
                        accept="image/*"
                    />
                    <PrimaryButton
                        text="Request Quote"
                        onClick={(e) => {
                            e.preventDefault();
                            setSub(true);
                        }}
                        disabled={submitted}
                    />
                    <Notification
                        message="Message sent"
                        hide={() => setSub(false)}
                        display={submitted}
                    />
                </form>
                <div className="blurb">
                    <div className="section">
                        <p>
                            <em>
                                To get started working with us, or if you have
                                any questions, please contact us using the form
                                above. You can also give us a call at (905)
                                827-3200 or email us at
                                info@oakvillewindows.com.
                            </em>
                        </p>
                    </div>
                    <div className="section">
                        <h2>Location</h2>
                        <p className="location">
                            <span>1380 Speers Rd. Unit #7 </span>
                            <span>Oakville, Ontario </span>
                            <span>L6L 5V3</span>
                        </p>
                    </div>
                    <div className="section">
                        <h2>Phone</h2>
                        <div className="phone">
                            <p>
                                <span>Office:</span>
                                <span>(905) 827-3200</span>
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <h2>Office & Showroom Hours</h2>
                        <div className="hours">
                            <div>
                                <span>Monday</span>
                                <span>9:00 am - 4:00pm</span>
                            </div>
                            <div>
                                <span>Tuesday</span>
                                <span>9:00 am - 4:00pm</span>
                            </div>
                            <div>
                                <span>Wednesday</span>
                                <span>9:00 am - 6:00pm</span>
                            </div>
                            <div>
                                <span>Thursday</span>
                                <span>9:00 am - 4:00pm</span>
                            </div>
                            <div>
                                <span>Friday</span>
                                <span>9:00 am - 4:00pm</span>
                            </div>
                            <div>
                                <span>Saturday</span>
                                <span>By Appointment</span>
                            </div>
                            <div>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                    <div className="section small">
                        <p>
                            *Closed Saturdays during the months of November,
                            December, January & February
                        </p>
                        <p>*Closed Saturdays of Long Weekends</p>
                    </div>
                </div>
            </div>
            <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.800801278461!2d-79.71486178383195!3d43.422988475303114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5dba16866961%3A0x715961398c0fb8a8!2sOakville%20Windows%20%26%20Doors!5e0!3m2!1sen!2sca!4v1595081496207!5m2!1sen!2sca"
                frameBorder={0}
                allowFullScreen={undefined}
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>
    );
};

export default Contact;
