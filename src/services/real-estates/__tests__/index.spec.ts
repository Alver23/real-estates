// Under test file
import RealEstatesService from '../index';

describe('RealEstatesService', () => {
  describe('getList method', () => {
    it('should get the data successfully', async () => {
      const { estates, included } = await RealEstatesService.getList();
      expect(estates).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            realEstateIds: expect.any(Array),
          }),
        ])
      );

      expect(included).toEqual(expect.any(Object));
    });
  });
});
