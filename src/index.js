import React from "react";
import ReactDOM from 'react-dom';
import  { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import './App.css';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { browseHistory } from "./components/NavigateSetter";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

let hasRendered = false;

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }

};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (browseHistory.currentLocation === '/') {
                browseHistory.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        browseHistory.push('/');
    }
});




