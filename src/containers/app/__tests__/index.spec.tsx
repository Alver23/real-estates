// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import App from '../index';

describe('<App />', () => {
  let component: ShallowWrapper;
  const props = {};

  beforeEach(() => {
    component = shallow(<App {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
