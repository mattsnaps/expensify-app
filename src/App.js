import React from "react";
import ReactDOM from 'react-dom';
import  { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css'
import './styles/styles.css';
import {addExpense, editExpense} from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense( { description: 'Water Bill', amount: '20', createdAt: 2 }));
store.dispatch(addExpense( { description: 'Gas Bill', amount: '40', createdAt: 3} ))
store.dispatch(addExpense( { description: 'Rent', amount: '700', createdAt: 1} ))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(jsx,
    document.getElementById('app')
);
