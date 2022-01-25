import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

/**
 *Alternative way to list out items.
 */
const ExpenseListItem_old = (props) => (
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} --- {props.createdAt}</p>
    </div>
);

//dispatch is in the props. same as props.dispatch
const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} --- {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id: id }))
            console.log(id);
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
