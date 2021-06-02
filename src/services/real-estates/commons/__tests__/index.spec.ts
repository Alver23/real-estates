// Under test file
import { dataMapper, includedMapper } from '../index';

// Mocks
import mocks from './__mocks__/mock.json';

describe('RealEstateService Commons', () => {
  describe('dataMapper function', () => {
    it('should return the data successfully', () => {
      const response = dataMapper(mocks.data);
      expect(response).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            realEstateIds: expect.any(Array),
          }),
        ])
      );
    });
  });

  describe('includedMapper function', () => {
    it('should return the data successfully', () => {
      const response = includedMapper(mocks.included as any);
      expect(response).toEqual(expect.any(Object));
    });
  });
});
