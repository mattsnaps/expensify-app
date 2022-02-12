import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const navigate = useNavigate();

    const paramId = useParams().id;
    const expenseObject = useSelector((state) => state.expenses.find((expense) => expense.id === paramId));

    return (
        <div>
            <div className="page-header">
                <div className= "content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={expenseObject}
                    onSubmit2={(expense) => {
                        props.dispatch(startEditExpense(expenseObject.id, expense))
                        navigate('/');
                    }}
                />
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense({ id: expenseObject.id }))
                    navigate('/');
                }}>Remove</button>
            </div>

        </div>
    );
};

export default connect(null)(EditExpensePage);