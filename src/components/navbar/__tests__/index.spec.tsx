// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Navbar from '../index';

describe('<Navbar />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
