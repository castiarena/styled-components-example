import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';
import 'jest-styled-components';
// import enzymeToJson from 'enzyme-to-json'

describe('Button - component', () => {
    it('should', () => {
        const wrapper = mount(<Button />);
        expect(wrapper).toHaveStyleRule('color', '#fff')
    });
});