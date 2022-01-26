import React from "react";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
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
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>

        <p>{amount} --- {createdAt}</p>
    </div>
);

export default ExpenseListItem;
