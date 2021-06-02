// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import FavorityDetail from '../index';

describe('<FavorityDetail />', () => {
  let component: ShallowWrapper;
  const props = {
    images: [],
    name: 'faje name',
  };

  beforeEach(() => {
    component = shallow(<FavorityDetail {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const newProps = {
      ...props,
      images: [{ image: 'http://localhost/img.png', id: 1, alt: 'fake alt' }],
    };

    component.setProps({ ...newProps });
    expect(component.find('span')).toHaveLength(2);
  });
});
