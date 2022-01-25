const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
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

export default expensesReducer;