import React from "react";

const ExpenseListItem = (props) => (
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} --- {props.createdAt}</p>
    </div>
);

export const ExpenseListItem2 = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} --- {createdAt}</p>
    </div>
);

export default ExpenseListItem ;