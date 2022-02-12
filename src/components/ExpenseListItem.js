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
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">
                {numeral(amount / 100).format('$0,0.00')}
            </h3>
        </Link>

);

export default ExpenseListItem;
