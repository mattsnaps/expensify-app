import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        {
            /**
             * Alternate Way to get items and loop. other way used down below.
             *
             props.expenses.map((item) => (
                <ExpenseListItem
                    key={item.id}
                    description={item.description}
                    amount={item.amount}
                    createdAt={item.createdAt}
                />
             ))
             */
        }
        <h1>Expense List v.2</h1>
        {
            props.expenses.map((item) => (
                <ExpenseListItem key={item.id} {...item} />
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