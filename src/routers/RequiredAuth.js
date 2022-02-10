import {connect, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = (useSelector((state) => (!!state.auth.uid)));
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}


export default connect()(RequireAuth);