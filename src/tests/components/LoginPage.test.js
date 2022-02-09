import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";
import {Header} from "../../components/Header";

test('Login Page Render Test', () => {
    const wrapper = shallow(<LoginPage startLogin={'Boop'} />);
    expect(wrapper).toMatchSnapshot();
});

test('Render Login Page Login Success', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
