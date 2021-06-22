import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { server } from "./util/permalink";
// import ProtectedRoute from "./components/ProtectedRoute";
import { State } from "./types/state";
import Home from "./pages/Home";
import { connect } from "react-redux";
import Nav from "./components/Nav/Nav";

interface AppRouterProps {
    loggedIn: boolean;
}

const AppRouter: React.FC<AppRouterProps> = (props) => {
    useEffect(() => {
        window.addEventListener("beforeunload", async () => {
            await fetch(server + "auth/logout", {
                method: "POST",
                credentials: "include",
            });
        });
    }, []);
    return (
        <Router>
            {!props.loggedIn ? <Nav /> : null}
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default connect(({ auth }: State) => ({ loggedIn: auth }))(AppRouter);
