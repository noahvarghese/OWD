import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import { State } from "./types/state";
import { server } from "./util/permalink";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

interface AppProps {
    loggedIn: boolean;
}
const App: React.FC<AppProps> = ({ loggedIn }) => {
    useEffect(() => {
        window.addEventListener("beforeunload", async () => {
            if (loggedIn) {
                await fetch(server + "auth/logout", {
                    method: "POST",
                    credentials: "include",
                });
            }
        });
    }, [loggedIn]);

    return (
        <Router>
            <AppRouter>
                {!loggedIn && <Nav />}
                <Route exact path="/" component={Home} />
                {!loggedIn && <Footer />}
            </AppRouter>
        </Router>
    );
};

export default connect(({ auth }: State) => ({ loggedIn: auth }))(App);
