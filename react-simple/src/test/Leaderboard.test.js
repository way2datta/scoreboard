import React from 'react'
import { shallow } from 'enzyme'
import Leaderboard from '../components/Leaderboard';

describe('<Leaderboard />', () => {
  test('renders basic elements', () => {
    const wrapper = shallow(<Leaderboard />);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('MatchSummary')).toHaveLength(1);
    expect(wrapper.find('FeaturedSection')).toHaveLength(1);
    expect(wrapper.find('Tabs')).toHaveLength(1);
  });
})