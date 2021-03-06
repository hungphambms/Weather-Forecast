import {
  HOMEPAGE_FETCH_INIT,
  HOMEPAGE_FETCH_SUCCESS,
  HOMEPAGE_FETCH_ERROR,
  HOMEPAGE_FETCH_RESET,
} from "./actions";

export const initialState = {
  isLoading: false,
  isError: false,
  data: { daily: [] },
};

export const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_FETCH_RESET:
      return { ...initialState };
    case HOMEPAGE_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case HOMEPAGE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case HOMEPAGE_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    default:
      return state;
  }
};
