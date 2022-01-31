import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test('ExpenseListItem Success', () => {
    const testExpense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...testExpense}/>);
    expect(wrapper).toMatchSnapshot();
});