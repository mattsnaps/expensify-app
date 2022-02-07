import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { ref, get } from "firebase/database";

const createMockStore = configureMockStore([thunk]);

test('Remove Expense Action Object Success', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Edit Expense Action Object Success', () => {
    const action = editExpense('123zxc', {
        description: 'Car Payment Update',
        note: 'This is a new note!',
        amount: 233.44
    });
    expect(action).toEqual({
       type: 'EDIT_EXPENSE',
       id: '123zxc',
       updates: {
           description: 'Car Payment Update',
           note: 'This is a new note!',
           amount: 233.44
       }
    });
});

test('Add Expense Action Object Provided Values Success', () => {
    const expenseData = expenses[1]
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Add Expense Action Object. Add expense to database and store Success', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This is a one',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        const databaseRef = ref(database, `expenses/${action[0].expense.id}`);
        return get(databaseRef).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });
});

test('Add Expense Action Object. Add defaults to database and store Success', (done) => {
    const store = createMockStore({});
    const expenseData = {
        amount: 0,
        createdAt: 0,
        description: '',
        note: ''
    };
    store.dispatch(startAddExpense({})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        const databaseRef = ref(database, `expenses/${action[0].expense.id}`);
        return get(databaseRef).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });
});


// test('Add Expense Action Object Default Values Success', () => {
//     const defaultData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultData,
//             id: expect.any(String)
//         }
//     });
// });