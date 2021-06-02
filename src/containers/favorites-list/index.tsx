// Dependencies
import { ReactElement } from 'react';

// Components
import FavorityNewList from './components/favority-new-list';
import FavorityDetail from './components/favority-detail';

// Hooks
import { useGetRealEstates } from './hooks';

// Styles
import './scss/index.scss';

const FavoritesList = (): ReactElement => {
  const [, realEstates] = useGetRealEstates();

  return (
    <div className="favority-container">
      {realEstates.map(({ id, name, images }: any) => (
        <div className="favority-container--card-container" key={id}>
          <FavorityDetail images={images} name={name} />
        </div>
      ))}
      <div className="favority-container--new-item">
        <FavorityNewList />
      </div>
    </div>
  );
};

export default FavoritesList;
