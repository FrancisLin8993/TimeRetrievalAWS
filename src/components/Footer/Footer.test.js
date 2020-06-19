import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  it('render components correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toHaveLength(1);
  });
});
