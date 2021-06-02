// Dependencies
import { renderHook } from '@testing-library/react-hooks';

// Under test file
import { useGetRealEstates } from '../index';

describe('useGetRealEstates hooks', () => {
  it('should get the real estates', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetRealEstates());
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(expect.any(String));
    expect(result.current[1]).toHaveLength(4);
  });
});
