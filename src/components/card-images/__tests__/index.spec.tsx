// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Mocks
import mocks from './mocks.json';

// Under test file
import CardImages from '../index';

describe('<CardImages />', () => {
  let component: ShallowWrapper;

  const props = {
    images: mocks,
  };

  beforeEach(() => {
    component = shallow(<CardImages {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find('.card-images-container').children()).toHaveLength(4);
    expect(component.find('span').text()).toBe('+ 2');
  });

  it('should render correctly when send two images', () => {
    const images = [...mocks];
    images.splice(0, 2);
    component.setProps({ images });
    expect(component.find('.card-images-container').children()).toHaveLength(2);
    expect(component.find('span').exists()).toBeFalsy();
  });
});
