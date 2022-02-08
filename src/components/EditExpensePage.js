import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const navigate = useNavigate();

    const paramId = useParams().id;
    const expenseObject = useSelector((state) => state.expenses.find((expense) => expense.id === paramId));

    return (
        <div>
            <ExpenseForm
                expense={expenseObject}
                onSubmit2={(expense) => {
                    props.dispatch(editExpense(expenseObject.id, expense))
                    navigate('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: expenseObject.id }))
                navigate('/');
            }}>Remove</button>
        </div>
    );
};

export default connect(null)(EditExpensePage);