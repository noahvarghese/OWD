import React, { useState } from "react";
import DropdownArrow from "../Arrows/DropdownArrow";
import { PagesAttributes } from "../../types/page";
import "./Item.scss";
import { isBrowser, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

interface ItemAttributes {
    page: PagesAttributes;
    large: boolean;
    onClick?: () => any;
    classes: string[];
}

const Item: React.FC<ItemAttributes> = ({ page, large, onClick, classes }) => {
    const [show, setShow] = useState(false);

    const triggerDisplay = () => {
        if (page.subMenu) {
            setShow(!show);
        }
    };
    return (
        <li
            className={`${show ? "show " : ""}Item ${classes.join(" ")}`}
            onMouseEnter={() => (isBrowser ? triggerDisplay() : null)}
            onMouseLeave={() => {
                if (isBrowser) {
                    triggerDisplay();
                }
            }}
            onClick={() => {
                if (onClick) onClick();
                if (isMobile) {
                    triggerDisplay();
                }
            }}
        >
            <Link
                to={page.path}
                onClick={(e) => {
                    // prevent dropdown from opening when link is clicked
                    e.stopPropagation();
                }}
            >
                {page.title}
            </Link>
            {page.subMenu ? (
                <>
                    <DropdownArrow show={show} />
                    <div className="SubMenuContainer">
                        {page.subMenu.map((sub) => {
                            return (
                                <div key={sub.title}>
                                    <h4>{sub.title}</h4>
                                    <ul>
                                        {sub.list.map((item, listIndex) => (
                                            <li key={listIndex}>
                                                <Link to={item.path}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : null}
        </li>
    );
};

export default Item;
