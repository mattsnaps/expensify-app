import React from "react";
import ReactDOM from 'react-dom';
import  { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css'
import './styles/styles.css';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { browseHistory } from "./components/NavigateSetter";


const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

let hasRendered = false;

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

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
        console.log('uid', user.uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (browseHistory.currentLocation === '/') {
                browseHistory.push('/dashboard');
            }
        });
        console.log('Logged In');
    } else {
        store.dispatch(logout());
        console.log('Logged Out');
        renderApp();
        browseHistory.push('/');
    }
});




