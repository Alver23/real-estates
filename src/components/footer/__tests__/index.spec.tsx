// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Footer from '../index';

describe('<Footer />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
