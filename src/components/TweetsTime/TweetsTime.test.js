import React from 'react';
import ReactDOM from 'react-dom';
import TweetsTime from './TweetsTime';
import { Formik } from 'formik';
import { shallow } from 'enzyme';

describe('<TweetsTime />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TweetsTime />, div);
  });

  it('render components correctly', () => {
    const wrapper = shallow(<TweetsTime />);
    expect(wrapper.find(Formik)).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(3);
  });
});
