import React from "react";
import { shallow } from 'enzyme';
import Header from "../../components/Header";

test('Render Header Success', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify App');
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
