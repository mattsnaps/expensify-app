import React from "react";
import ReactDOM from 'react-dom';
import  { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense, editExpense} from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css'
import './styles/styles.css';

const store = configureStore();

store.dispatch(addExpense( { description: 'Water Bill', amount: '20', createdAt: 2 }));
store.dispatch(addExpense( { description: 'Gas Bill', amount: '40', createdAt: 3} ))
store.dispatch(addExpense( { description: 'Rent', amount: '700', createdAt: 1} ))

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(jsx,
    document.getElementById('app')
);
