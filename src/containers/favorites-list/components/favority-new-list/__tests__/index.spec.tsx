// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import FavorityNewList from '../index';

describe('<FavorityNewList />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<FavorityNewList />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find('span').exists()).toBeTruthy();
  });
});
