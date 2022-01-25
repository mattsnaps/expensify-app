import React from "react";
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css'
import './styles/styles.css';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

const expenseOne = store.dispatch(addExpense( { description: 'Water Bill', amount: '4000', createdAt: 15000 }));
const expenseTwo = store.dispatch(addExpense( { description: 'Gas Bill', amount: '3000', createdAt: 13300} ))

store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />,
    document.getElementById('app')
);
