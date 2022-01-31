import React from "react";
import { shallow } from 'enzyme';
import Header from "../../components/Header";

test('Render Header Success', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').length).toBe(1);

    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
