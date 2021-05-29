// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import HomePage from '../index';

describe('<HomePage />', () => {
  let component: ShallowWrapper;
  const props = {};

  beforeEach(() => {
    component = shallow(<HomePage {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
