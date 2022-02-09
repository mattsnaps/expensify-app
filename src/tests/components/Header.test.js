import React from "react";
import { shallow } from 'enzyme';
import { Header } from "../../components/Header";

test('Render Header Success', () => {
    const wrapper = shallow(<Header startLogout={() => {} }/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render Heder Logout Success', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
