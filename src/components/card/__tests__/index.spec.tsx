// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import Card from '../index';

describe('<Card />', () => {
  let component: ShallowWrapper;

  const children = <p>Children content</p>;
  const props = {
    children,
  };

  beforeEach(() => {
    component = shallow(<Card {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with chldren', () => {
    expect(component.find('p').exists()).toBeTruthy();
  });
});
