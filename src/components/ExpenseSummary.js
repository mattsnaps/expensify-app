import React from "react";
import { connect, useSelector } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpenseSummary = () => {

    const expenses = useSelector((state) => getVisibleExpenses(state.expenses, state.filters));
    const expenseCount = expenses.length;
    const expenseTotal = numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00');

    return(
        <div>
            <p>Viewing {expenseCount} expenses for a total of: {expenseTotal}</p>
        </div>
    );
};

export default connect()(ExpenseSummary);