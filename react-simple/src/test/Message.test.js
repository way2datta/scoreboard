import React from 'react'
import { shallow } from 'enzyme'
import Message from './../components/Message';

describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
})