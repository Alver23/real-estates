// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import CardImage from '../index';

describe('<Footer />', () => {
  let component: ShallowWrapper;

  const props = {
    image: 'http://localhost/img.png',
    alt: 'fake image',
  };

  beforeEach(() => {
    component = shallow(<CardImage {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find('img').exists()).toBeTruthy();
  });
});
