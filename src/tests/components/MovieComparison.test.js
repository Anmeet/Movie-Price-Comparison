import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import MovieComparison from '../../components/MovieComparison';

test('should render MovieComparison Page correctly', () => {
  const wrapper = shallow(<MovieComparison />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
