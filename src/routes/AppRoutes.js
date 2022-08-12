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
const About = React.lazy(() => import('./../features/about/About'));
const Delete = React.lazy(() => import('./../features/delete/DeleteFn'));
const Redux = React.lazy(() => import('./../features/redux/Redux'));
const Popup = React.lazy(() => import('./../features/close-popup/ClosePopup'));
const Crud = React.lazy(() => import('./../features/crud/Crud'));
const Weather = React.lazy(() => import('./../features/weather/Weather'));
const Ecomm = React.lazy(() => import('./../features/ecomm/Ecomm'));
const Error404 = React.lazy(() => import('./../features/error-page/ErrorPage'));
const Dice = React.lazy(() => import('./../features/dice/Dice'));
const Cart = React.lazy(() => import('./../features/cart/Cart'));
const Filter = React.lazy(() => import('./../features/filter/Filter'));
const Speech = React.lazy(() => import('./../features/speech/Speech'));
const DpFilter = React.lazy(() => import('./../features/filter/DpFilter'));
const Table = React.lazy(() => import('./../features/table/Table'));
const Rtable = React.lazy(() => import('./../features/table/Rtable'));


function AppRoutes(props) {
   
    return (
        <BrowserRouter>
            <NavBar />
            <React.Suspense fallback={<SpinLoader />}>
                <Switch>
                    <Route exact path="/" name="main-page" component={MainPage} />
                    <Route exact path="/about" name="about-page" component={About} />
                    <Route exact path="/delete" name="del-page" component={Delete} />
                    <Route exact path="/redux" name="redux-page" component={Redux} />
                    <Route exact path="/popup" name="popup-page" component={Popup} />
                    <Route exact path="/crud" name="crud-page" component={Crud} />
                    <Route exact path="/weather" name="weather" component={Weather} />
                    <Route exact path="/dice" name="dice" component={Dice} />
                    <Route exact path="/ecomm" name="ecomm" component={Ecomm} />
                    <Route exact path="/filter" name="ecomm" component={Filter} />
                    <Route exact path="/dp_filter" name="ecomm" component={DpFilter} />
                    <Route exact path="/cart" name="cart" component={Cart} />
                    <Route exact path="/speech" name="speech" component={Speech} />
                    <Route exact path="/table" name="speech" component={Table} />
                    <Route exact path="/react-table" name="speech" component={Rtable} />
                    <Route exact path="/error-404" name="error404" component={Error404} />
                    <Route render={() => <Redirect to="/error-404" />} />
                </Switch>
            </React.Suspense>

        </BrowserRouter>
    );
}

export default AppRoutes;