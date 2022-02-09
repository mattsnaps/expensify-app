import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../../components/LoginPage";

test('Login Page Render Test', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});