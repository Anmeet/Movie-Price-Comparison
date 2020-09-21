import React from 'react';
import Movie from '../../components/Movie';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Movie Page correctly', () => {
  const wrapper = shallow(
    <Movie id='123' poster='https://poster.com' title='poster name' />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
