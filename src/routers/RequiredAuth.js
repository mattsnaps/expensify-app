import {connect, useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import NavigateSetter, {browseHistory} from "../components/NavigateSetter";

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = (useSelector((state) => (!!state.auth.uid)));
    const location = useLocation().pathname
    if (location === '/' && isAuthenticated) {
        return <Navigate to={redirectTo} />
    } else return children;
};


export default connect()(RequireAuth);