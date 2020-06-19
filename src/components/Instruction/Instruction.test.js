import React from 'react';
import ReactDOM from 'react-dom';
import Instruction from './Instruction';
import { shallow } from 'enzyme';

describe('<Instruction />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Instruction />, div);
  });

  it('render components correctly', () => {
    const wrapper = shallow(<Instruction />);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(5);
  });
});
