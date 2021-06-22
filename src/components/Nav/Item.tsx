import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownArrow from "../DropdownArrow";
import { PagesAttributes } from "./pages";
import "./Item.scss";
import { isBrowser, isMobile } from "react-device-detect";

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
            <Link to={page.path}>{page.title}</Link>
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
            ) : null}
        </li>
    );
};

export default Item;
