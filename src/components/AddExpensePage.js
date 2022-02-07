import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

export const AddExpensePage = (props) => {

    const navigate = useNavigate();

    const onSubmit = (expense) => {
        props.startAddExpense(expense);
    };

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit2={
                    (expense) => {
                        onSubmit(expense);
                        navigate('/', {replace: true});
                    }
                }
            />
        </div>
    );
};



const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);