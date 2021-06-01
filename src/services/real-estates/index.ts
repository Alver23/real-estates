// Interfaces
import { IRealEstates } from '@alversoft/interfaces/real-estates';
import { IRealEstateApiResponse } from '@alversoft/services/real-estates/interfaces/api';

// Commons
import { dataMapper, includedMapper } from '@alversoft/services/real-estates/commons';

// Mocks
import realEstatesMock from './__mocks__/real_estates.json';

class RealEstatesService {
  private mapperList(response: IRealEstateApiResponse): IRealEstates {
    const { data, included } = response;
    return {
      estates: dataMapper(data),
      included: includedMapper(included),
    };
  }

  public async getList(): Promise<IRealEstates> {
    return new Promise((resolve) => {
      resolve(this.mapperList(realEstatesMock as any));
    });
  }
}

export default new RealEstatesService();
