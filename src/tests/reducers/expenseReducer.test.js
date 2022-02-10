import expensesReducer from "../../reducers/expensesReducer";
import expenses from "../fixtures/expenses";

test('expensesReducer set default state Success', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('expensesReducer remove expense by id Success', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('expensesReducer remove expense by NOT FOUND id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1233'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('expenseReducer add an expense Success', () => {
    const newExpense = {
        id: '344',
        description: 'Bear',
        note: '',
        amount: 19533,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('expenseReducer edit an expense Success', () => {
    const testNote = 'This is a test';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: testNote
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toEqual(testNote);
});

test('expenseReducer edit a NOT FOUND expense', () => {
    const testNote = 'This is a test';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 300,
        updates: {
            note: testNote
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Expense Reducer should set Expenses Success', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});






