import React, { useState } from "react";
import DropdownArrow from "../DropdownArrow";
import { PagesAttributes } from "../../types/page";
import "./Item.scss";
import { isBrowser, isMobile } from "react-device-detect";
import LinkTracker from "../Routing/LinkTracker";

interface ItemAttributes {
    page: PagesAttributes;
    large: boolean;
}

const Item: React.FC<ItemAttributes> = ({ page, large }) => {
    const [show, setShow] = useState(false);

    const triggerDisplay = () => {
        if (page.subMenu) {
            setShow(!show);
        }
    };
    return (
        <li
            className={`${show ? "show " : ""}Item`}
            onMouseEnter={() => (isBrowser ? triggerDisplay() : null)}
            onMouseLeave={() => {
                if (isBrowser) {
                    triggerDisplay();
                }
            }}
            onClick={() => {
                if (isMobile) {
                    triggerDisplay();
                }
            }}
        >
            <LinkTracker to={page.path} text={page.title} />
            {page.subMenu ? <DropdownArrow show={show} /> : null}
            {page.subMenu ? (
                <div className="SubMenuContainer">
                    {page.subMenu.map((sub) => {
                        return (
                            <div key={sub.title}>
                                <h4>{sub.title}</h4>
                                <ul>
                                    {sub.list.map((item, listIndex) => (
                                        <li key={listIndex}>
                                            <LinkTracker
                                                to={item.path}
                                                text={item.title}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </li>
    );
};

export default Item;
