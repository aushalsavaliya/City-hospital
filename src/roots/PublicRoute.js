import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    let login = localStorage.getItem("login");

    return (

        <Route {...rest}

            render={(props) => (
                login && restricted ?
                    <>
                        <Header />
                        <redirect to={"/"} />
                        <Footer />
                    </>
                    :
                    <>
                        <Header />
                        <Component />
                        <Footer />
                    </>

            )}

        />

    );
}

export default PublicRoute;