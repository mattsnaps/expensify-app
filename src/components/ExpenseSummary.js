import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpenseSummary = () => {

    const expenses = useSelector((state) => getVisibleExpenses(state.expenses, state.filters));
    const expenseCount = expenses.length;
    const expenseTotal = numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00');

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expenses for a total of: <span>{expenseTotal}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
            </div>
        </div>
    );
};

export default connect()(ExpenseSummary);