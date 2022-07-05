/**
 * Navbar for navigation to other page
 * Author: Arif
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import { getAllLocalStorageData, itemLength } from '../../global/localStorage';

function NavBar(props) {
    //  const cartItem = useSelector((state)=>state.cart.data.length)

    const carItem = getAllLocalStorageData()

 
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbarBackground">
                <Link className="navbar-brand" to="/">React 22</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/delete">DeleteFnc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/redux">Redux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/popup">Popup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/crud">Crud</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/weather">Weather</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a active ClassName="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Category
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/covidIndia">Covid</Link>
                                <Link className="dropdown-item" to="/graph">Graph</Link>
                                <Link className="dropdown-item" to="/apicall">Params Api</Link>
                                <Link className="dropdown-item" to="/tfv">TFV Api</Link>
                                <Link className="dropdown-item" to="/conditionalResponsive">Device Size</Link>
                                <Link className="dropdown-item" to="/fileUpload">File Upload</Link>
                                <Link className="dropdown-item" to="/amount">Amount</Link>
                                <Link className="dropdown-item" to="/InfiniteScroll">Scroll</Link>
                                <Link className="dropdown-item" to="/customHook">Custom Hook</Link>
                                <Link className="dropdown-item" to="/cleanCode">Cleanup Code</Link>
                                <Link className="dropdown-item" to="/conditionalRendering">Condition Rendering</Link>
                                <Link className="dropdown-item" to="/localStorage">Local Storage</Link>
                                <Link className="dropdown-item" to="/skeleton">Skeleton</Link>
                                <Link className="dropdown-item" to="/search">Search</Link>
                            </div>
                        </li> */}
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/dice">Dice</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink activeClassName="active" to="/apicall">Api</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/ecomm">Ecomm</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/filter">Filter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/cart">Cart {carItem.length} </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;