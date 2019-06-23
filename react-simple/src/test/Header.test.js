import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header';

describe('<Header />', () => {
  test('renders basic elements', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('div.container')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
  });
})