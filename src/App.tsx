import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import { State } from "./types/state";
import { server } from "./util/permalink";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import Products, { ProductProps } from "./pages/Products";

import DoorHero from "./assets/img/doors.jpeg";
import WindowHero from "./assets/img/window_banner.png";
import RepairHero from "./assets/img/repairs.jpeg";
import { materials } from "./data/products/windows/materials";
import { styles } from "./data/products/windows/styles";
import { patioDoors } from "./data/products/doors/patio";
import { frontDoors } from "./data/products/doors/front";
import { repairs } from "./data/products/repairs";
import Commercial from "./pages/Commercial";

interface AppProps {
    loggedIn: boolean;
}

const imageURL = (suffix: string) => `${process.env.PUBLIC_URL}/${suffix}/`;

const pageProps: ProductProps = {
    productType: "Windows",
    description: [
        "If you're looking for a window installation by a knowledgable experienced and family owned company, Oakville Windows & Doors can help. Our experienced team can help you choose the best type of window for your home's look and your family's needs.",
    ],
    hero: WindowHero,
    products: [
        {
            title: "Styles",
            items: styles,
        },
        {
            title: "Materials",
            items: materials,
        },
    ],
    parentImagePath: imageURL("windows"),
};

const doorProps: ProductProps = {
    productType: "Doors",
    description: [
        "Increase the curb appeal of your home with a new entry door system. Whether you need a replacement for your front door, back door, garden door, patio door or any other type of exterior door, we have a wide selection to fit your needs and style. Our doors feature a 3 lock system to keep your home safe.",
        "From replacing a single door to upgrading all of the doors on your home for a beautiful, cohesive look, we work with you to find the door with the right style, fit and features for you and your home.",
    ],
    hero: DoorHero,
    products: [
        {
            title: "Entry",
            items: frontDoors,
        },
        {
            title: "Patio",
            items: patioDoors,
        },
    ],
    parentImagePath: imageURL("doors"),
};

const repairProps: ProductProps = {
    productType: "Repairs",
    description: [
        "If you're looking for a window installation by a knowledgable experienced and family owned company, Oakville Windows & Doors can help. Our experienced team can help you choose the best type of window for your home's look and your family's needs.",
    ],
    hero: RepairHero,
    products: [
        {
            items: repairs,
        },
    ],
    parentImagePath: imageURL("repairs"),
};

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
                <Route
                    exact
                    path="/windows"
                    component={() => Products(pageProps)}
                />
                <Route
                    exact
                    path="/doors"
                    component={() => Products(doorProps)}
                />
                <Route
                    exact
                    path="/repairs"
                    component={() => Products(repairProps)}
                />
                <Route exact path="/commercial" component={Commercial} />
                {!loggedIn && <Footer />}
            </AppRouter>
        </Router>
    );
};

export default connect(({ auth }: State) => ({ loggedIn: auth }))(App);
