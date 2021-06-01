interface IRealEstatesGroupAttributes {
  name: string;
  realEstateIds: number[];
}
export interface IRealEstatesGroup {
  id: string;
  attributes: IRealEstatesGroupAttributes;
}

export enum City {
  Bogotá = 'Bogotá',
}

export enum Country {
  Colombia = 'Colombia',
}

export enum LaHausState {
  Active = 'active',
  Inactive = 'inactive',
}

export interface IRealEstateDetail {
  id: string;
  attributes: IRealEstateDetailAttributes;
}

export interface IRealEstateDetailAttributes {
  slug: string;
  name: string;
  description: string;
  code: string;
  city: City;
  country: Country;
  neighborhood: string;
  minArea: number;
  minPrice: number;
  maxPrice: null;
  isNew: boolean;
  stratum: number;
  matterport: null;
  galleryUrls: string[];
  administrationPrice: number | null;
  bathroom: number[];
  bedroom: number[];
  amenities: string[];
  parkingLotsUnits: number[];
  parkingLots: number[];
  yearBuilt: number;
  reservationFee: null;
  reservationFeeMeasureUnit: null;
  builder: null;
  fiduciary: null;
  latitude: number;
  longitude: number;
  laHausState: LaHausState;
  isPrelaunch: boolean;
  laHausCity: City;
  deliveredAt: Date;
  pricePerSquareMeter: number;
  minimumPriceGuaranteed: null;
}

export interface IRealEstateApiResponse {
  data: IRealEstatesGroup[];
  included: IRealEstateDetail[];
}
