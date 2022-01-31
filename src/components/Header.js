import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" className={({ isActive }) => "" + (isActive ? "is-active" : "")}>Home</NavLink>
        <NavLink to="/create" className={({ isActive }) => "" + (isActive ? "is-active" : "")}>Create Expense</NavLink>
    </header>
);

export default Header;