/**
 * App Routes for all pages
 * Author: Arif
 */

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from '../comonents/navigation/NavBar';
import SpinLoader from './../comonents/spin-loader/SpinLoader'

// First Page
const MainPage = React.lazy(() => import('./../features/counter/Counter'));

function AppRoutes(props) {
    return (
        <BrowserRouter>
            <NavBar />
            <React.Suspense fallback={<SpinLoader />}>
                <Switch>
                    <Route exact path="/" name="main-page" component={MainPage} />
                    {/* <Route exact path="/error-404" name="error404" component={Error404} /> */}
                    <Route render={() => <Redirect to="/error-404" />} />
                </Switch>
            </React.Suspense>

        </BrowserRouter>
    );
}

export default AppRoutes;