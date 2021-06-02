// Dependencies
import { shallow, ShallowWrapper } from 'enzyme';

// Hooks
import * as RealEstatesHooks from '../hooks';

// Under test file
import FavoritesList from '../index';

describe('<FavoritesList />', () => {
  let component: ShallowWrapper;
  const mockState = ['idle', [{ id: 1, name: 'fake name', images: [] }]];

  beforeEach(() => {
    jest.spyOn(RealEstatesHooks, 'useGetRealEstates').mockReturnValue(mockState);
    component = shallow(<FavoritesList />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
