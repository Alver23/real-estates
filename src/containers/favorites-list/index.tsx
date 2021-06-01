// Dependencies
import { ReactElement, useMemo } from 'react';

// Hooks
import { useFetch } from '@alversoft/hooks/use-fetch';

// Services
import RealEstatesService from '@alversoft/services/real-estates';

// Components
import CardImages from '@alversoft/components/card-images';

// Interfaces
import { IRealEstateData } from '@alversoft/interfaces/real-estates';

// Styles
import './scss/index.scss';

const FavoritesList = (): ReactElement => {
  const getList = () => {
    return RealEstatesService.getList();
  };

  const initialState = {
    data: {
      estates: [],
      included: undefined,
    },
  };
  const [state] = useFetch(getList, [], initialState);
  const {
    data: { estates, included },
  } = state;

  const newEstates = useMemo(() => {
    return estates.map((item: IRealEstateData) => {
      const { realEstateIds } = item;
      const estateDetailImages = realEstateIds
        .map((realEstateId) => {
          const { galleryUrls, name } = included[realEstateId] || { galleryUrls: [] };
          if (galleryUrls && galleryUrls.length > 0) {
            return {
              id: realEstateId.toString(),
              image: galleryUrls[0],
              alt: name,
            };
          }
          return undefined;
        })
        .filter((item) => !!item);
      return {
        ...item,
        images: estateDetailImages,
      };
    });
  }, [estates, included]);

  return (
    <div className="favority-container">
      {newEstates.map(({ id, name, images }: any) => {
        return (
          <div className="favority-container--card-container" key={id}>
            <CardImages images={images} />
            <div className="mt-4 flex flex-col">
              <span className="text-lg text-primary font-semibold">{name}</span>
              <span className="text-green-400 mt-2">{images.length} propiedades guardadas</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavoritesList;
