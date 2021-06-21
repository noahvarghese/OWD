import React from "react";
import { NavProps } from "./Nav";
import "SubMenu.scss";

const SubMenu: React.FC<NavProps> = (props) => {
    return <>{props.component()}</>;
};

export default SubMenu;
