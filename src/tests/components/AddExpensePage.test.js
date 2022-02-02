import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import {BrowserRouter} from "react-router-dom";
import expenses from "../fixtures/expenses";

beforeEach(() => {

});


test('AddExpensePage render Success', () => {
    const addExpense = jest.fn();
    const wrapper = shallow(<BrowserRouter><AddExpensePage addExpense={addExpense} /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
});