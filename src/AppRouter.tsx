import React, { ReactNode, useEffect } from "react";
// import ProtectedRoute from "./components/ProtectedRoute";
import { State } from "./types/state";
import { connect } from "react-redux";
import { CustomAction } from "./types/customAction";
import { useLocation } from "react-router-dom";

interface AppRouterProps {
    path: { title: string; path: string }[];
    setPath: (path: string) => CustomAction;
    children?: ReactNode;
}
const AppRouter: React.FC<AppRouterProps> = ({ setPath, ...props }) => {
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location, setPath]);

    return <>{props.children}</>;
};

export default connect(
    ({ path }: State) => ({ path }),
    (dispatch) => ({
        setPath: (path: string) =>
            dispatch({ type: "SET_PATH", payload: path }),
    })
)(AppRouter);
