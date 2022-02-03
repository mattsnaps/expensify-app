import React from "react";
import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";


test('ExpenseTotal with no expenses Success', () => {
    const results = selectExpensesTotal([]);

    expect(results).toEqual(0);

});

test('ExpenseTotal with one expense Success', () => {
    const results = selectExpensesTotal([expenses[1]]);

    expect(results).toEqual(1095);
});

test('ExpenseTotal with multiple expenses', () => {
    const results = selectExpensesTotal(expenses);

    expect(results).toEqual(5340);
});