import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

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
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;
