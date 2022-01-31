import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("ExpenseList Render expense list with expenses Success", () => {
   const wrapper = shallow(<ExpenseList expenses={expenses}/>);
   expect(wrapper).toMatchSnapshot();
});

test("ExpenseList Render expense list with no expenses Success", () => {
   const wrapper = shallow(<ExpenseList expenses={[]}/>);
   expect(wrapper).toMatchSnapshot();
});
