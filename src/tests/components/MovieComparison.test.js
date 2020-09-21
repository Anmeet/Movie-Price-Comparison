import React from 'react';
import { shallow } from 'enzyme';
import MovieComparison from '../../components/MovieComparison';

test('should render MovieComparison Page correctly', () => {
  const wrapper = shallow(<MovieComparison />);
  expect(wrapper).toMatchSnapshot();
});
