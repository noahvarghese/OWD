import React from "react";
import { pages } from "./pages";
import { Link } from "react-router-dom";

const SmallNav: React.FC = () => {
    return (
        <ul className="SmallNav">
            {pages.map((page, index) => (
                <li key={index}>
                    <Link to={page.path}>{page.title}</Link>
                    {page.subMenu ? (
                        <div className="SmallSubMenuContainer">
                            {" "}
                            {page.subMenu.map((sub) => {
                                return (
                                    <>
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
                                    </>
                                );
                            })}
                        </div>
                    ) : null}
                </li>
            ))}
        </ul>
    );
};

export default SmallNav;
