// Dependencies
import React, { Dispatch } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Header from '../index';

describe('<Header />', () => {
  let component: ShallowWrapper;
  const mockState: [boolean, Dispatch<any>] = [true, jest.fn()];

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockReturnValue(mockState);
    component = shallow(<Header />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the click event of the hamburger menu', () => {
    component.find('button').simulate('click');
    expect(mockState[1]).toHaveBeenCalledTimes(1);
  });
});
