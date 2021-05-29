// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import LayoutApp from '../index';

describe('<LayoutApp />', () => {
  let component: ShallowWrapper;

  const children = <p>Children content</p>;
  const props = {
    children,
  };

  beforeEach(() => {
    component = shallow(<LayoutApp {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with chldren', () => {
    expect(component.find('p').exists()).toBeTruthy();
  });
});
