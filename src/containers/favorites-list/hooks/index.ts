// Dependencies
import { useMemo } from 'react';

// Hooks
import { useFetch } from '@alversoft/hooks/use-fetch';

// Services
import RealEstatesService from '@alversoft/services/real-estates';

// Interfaces
import { IRealEstateData } from '@alversoft/interfaces/real-estates';

export const useGetRealEstates = () => {
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
    status,
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

  return [status, newEstates];
};

export default useGetRealEstates;
