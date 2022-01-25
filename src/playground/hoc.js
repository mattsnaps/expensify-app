import React from "react";
import ReactDOM from "react-dom";

//Wrapping other components with HOC (Higher Order Component).

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Access denied!</p> }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info={'Something'}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info={'Here is the data.'}/>, document.getElementById('app'));