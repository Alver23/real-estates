// Interfaces
import { IRealEstateData, IRealEstateIncluded } from '@alversoft/interfaces/real-estates';
import { IRealEstatesGroup, IRealEstateDetail } from '@alversoft/services/real-estates/interfaces/api';

export const dataMapper = (data: IRealEstatesGroup[]): IRealEstateData[] => {
  return data.map((item) => {
    const { id, attributes } = item;
    const { name, realEstateIds } = attributes;
    return {
      id,
      name,
      realEstateIds,
    };
  });
};

export const includedMapper = (data: IRealEstateDetail[]): IRealEstateIncluded => {
  const newData: any = {};
  data.forEach((item) => {
    const { id, attributes } = item;
    newData[id] = attributes;
  });

  return newData;
};
