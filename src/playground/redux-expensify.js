import { createStore, combineReducers } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

//Things that we are going to be tracking.
// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id: id } = {}) => ({
    id: id,
    type: 'REMOVE_EXPENSE'
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
   type: 'SET_START_DATE',
   startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState = [];

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    //This uses the spread operator keeps part of old object and overides what has been updated.
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    //Won't change anything.
                    return expense;
                };
            });
        default:
            return state;
    }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        default:
            return state;
    }
};

//Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store Creation
const store = createStore(
    combineReducers( {
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'January Rent', amount: 100, createdAt: -900 } ));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', note: 'Morning Coffee', amount: 6000, createdAt: -1000 } ));
//
// store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));
//
//store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

//store.dispatch(setStartDate(0)); //125
// store.dispatch(setStartDate()); //undefined.
//store.dispatch(setEndDate(112112)); //


const demoState = {
    expenses: [{
        id: 'pnmkgerflkdsdfmv',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //Date or the amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Matthew',
//     id: 32445
// };
//
// console.log({
//     id: 1,
//     ...user,
//     age: 21
// });
//
// console.log({
//    ...user
// });

