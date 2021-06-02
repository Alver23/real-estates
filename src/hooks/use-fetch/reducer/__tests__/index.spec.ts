// Commons
import { STATUS_TYPES } from '@alversoft/commons/app';

// Test file
import { initialState, CONSTANTS, fetchReducer } from '../index';

describe('Fetch reducer', () => {
  const cases = [
    [
      {
        type: CONSTANTS.SET_LOADING,
        payload: STATUS_TYPES.SUCCEEDED,
        property: 'status',
      },
    ],
    [
      {
        type: CONSTANTS.SET_DATA,
        payload: [],
        property: 'data',
      },
    ],
    [
      {
        type: CONSTANTS.SET_ERROR,
        payload: {},
        property: 'errors',
      },
    ],
  ];

  it.each(cases)('should change the state of %s', ({ type, payload, property }) => {
    const state = fetchReducer(initialState as any, { type, payload });
    expect(state[property]).toEqual(payload);
  });

  it('should return default state', () => {
    const type: any = 'fake state';
    const state = fetchReducer(initialState as any, { type });
    expect(state).toEqual(initialState);
  });

  it('should reset state', () => {
    const type = CONSTANTS.SET_RESET;
    const state = fetchReducer(initialState as any, { type });
    expect(state).toEqual(initialState);
  });
});
