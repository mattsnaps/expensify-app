import React from "react";
import { connect } from "react-redux";
import ExpenseListItem, { ExpenseListItem2 } from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((item) => (
                <ExpenseListItem
                    key={item.id}
                    description={item.description}
                    amount={item.amount}
                    createdAt={item.createdAt}
                />
            ))
        }

        <h1>Expense List v.2</h1>
        {
            props.expenses.map((item) => (
                <ExpenseListItem2 key={item.id} {...item} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);