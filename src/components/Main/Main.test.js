import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import TweetsTime from '../TweetsTime/TweetsTime';
import Instruction from '../Instruction/Instruction';
import { shallow } from 'enzyme';

describe('<Main />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
  });

  it('render components correctly', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(TweetsTime)).toHaveLength(1);
    expect(wrapper.find(Instruction)).toHaveLength(1);
  });
});
