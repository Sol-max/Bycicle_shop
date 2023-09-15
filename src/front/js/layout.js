import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Terms } from "./pages/terms";
import { Profile } from "./pages/profile";
import { ShoppingCart } from "./pages/shoppingCart";
import { ResetPassword } from "./pages/resetPassword";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Profile/>} path="/profile" />
                        <Route element={<Profile/>} path="/profile/:orders/:id " />
                        <Route element={<ResetPassword/>} path="/resetPassword" />
                        <Route element={<ResetPassword/>} path="/resetPassword/:id" />
                        <Route element={<ShoppingCart/>} path="/shoppingCart" />
                        <Route element={<ShoppingCart/>} path="/shoppingCart/:orders/:id" />
                        <Route element={<Terms/>} path="/terms" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
