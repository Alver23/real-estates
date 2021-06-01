// Interfaces
import { IRealEstateDetailAttributes } from '@alversoft/services/real-estates/interfaces/api';

export interface IRealEstateData {
  id: string;
  name: string;
  realEstateIds: number[];
}

export interface IRealEstateIncluded {
  [key: string]: IRealEstateDetailAttributes;
}

export interface IRealEstates {
  data: IRealEstateData[];
  included: IRealEstateIncluded;
}
