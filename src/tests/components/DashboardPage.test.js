import React from 'react';
import DashboardPage from '../../components/Dashboard';

import { shallow } from 'enzyme';

test('should render Dashboard Page correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should render the Page Title Correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper.find('h1').text()).toBe(" Prince's Theartre ");
});
