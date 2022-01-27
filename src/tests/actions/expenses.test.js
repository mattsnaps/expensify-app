import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
    const expenseData = {
        description: 'Test Rent',
        amount: 33333,
        createdAt: 10000,
        note: 'This is a new Expense not test'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test('Add Expense Action Object Default Values Success', () => {
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    });
});