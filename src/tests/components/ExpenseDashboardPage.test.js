import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test('ExpenseDashboard Success', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});