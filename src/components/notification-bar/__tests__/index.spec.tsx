// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import NotificationBar from '../index';

describe('<NotificationBar />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<NotificationBar />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
