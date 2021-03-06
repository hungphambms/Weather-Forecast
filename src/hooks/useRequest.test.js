import * as Reducer from "./reducer";
import * as ACTIONS from "./actions";

import MOCK_DATA from "./mock";

const INIT_STATE = {
  isLoading: false,
  isError: false,
  data: { daily: [] },
};

describe("test the reducer and action", () => {
  it("should return the initial state", () => {
    expect(Reducer.initialState).toEqual(INIT_STATE);
  });

  it("HOMEPAGE_FETCH_RESET: should change isLoading & isError to true", () => {
    const changedState = Reducer.homepageReducer(Reducer.initialState, {
      type: ACTIONS.HOMEPAGE_FETCH_RESET,
    });

    expect(changedState.isLoading).toBe(false);
    expect(changedState.isError).toBe(false);
  });

  it("HOMEPAGE_FETCH_INIT: should change isLoading & isError to true", () => {
    const changedState = Reducer.homepageReducer(Reducer.initialState, {
      type: ACTIONS.HOMEPAGE_FETCH_INIT,
    });

    expect(changedState.isLoading).toBe(true);
    expect(changedState.isError).toBe(false);
  });

  it("HOMEPAGE_FETCH_SUCCESS: should change data from empty to correct list", () => {
    const changedState = Reducer.homepageReducer(Reducer.initialState, {
      type: ACTIONS.HOMEPAGE_FETCH_SUCCESS,
      payload: MOCK_DATA,
    });

    expect(changedState.data).toBe(MOCK_DATA);
  });

  it("HOMEPAGE_FETCH_ERROR: should change isError to True", () => {
    const changedState = Reducer.homepageReducer(Reducer.initialState, {
      type: ACTIONS.HOMEPAGE_FETCH_ERROR,
    });

    expect(changedState.isError).toBe(true);
  });

  it("REDUCER: Default State", () => {
    const changedState = Reducer.homepageReducer(Reducer.initialState, {
      type: null,
    });
    expect(changedState).toBe(Reducer.initialState);
  });
});
