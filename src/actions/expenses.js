import database from "../firebase/firebase";
import { ref, push, get, remove } from "firebase/database";


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        const databaseRef = ref(database, '/expenses');
        return push(databaseRef, expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id: id } = {}) => ({
    id: id,
    type: 'REMOVE_EXPENSE'
});

export const startRemoveExpense = ({ id: id } = {}) => {
    return (dispatch) => {
        const databaseRef = ref(database, `expenses/${id}`);
        return remove(databaseRef).then(() => {
            dispatch(removeExpense({
                id
            }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenseList = [];
        const databaseRef = ref(database, '/expenses');
        return get(databaseRef).then((snapshot) => {
            snapshot.forEach((childExpense) => {
                expenseList.push({
                    id: childExpense.key,
                    ...childExpense.val()
                });
            });
            dispatch(setExpenses(expenseList));
        });

    };
};
