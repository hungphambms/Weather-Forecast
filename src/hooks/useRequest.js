import { useEffect, useReducer, useState } from "react";

import { homepageReducer, initialState } from "./reducer";

import {
  HOMEPAGE_FETCH_INIT,
  HOMEPAGE_FETCH_SUCCESS,
  HOMEPAGE_FETCH_ERROR,
  HOMEPAGE_FETCH_RESET,
} from "./actions";
import getWeather from "../api/getWeather";

function useRequest(initQuery = "") {
  const [state, dispatch] = useReducer(homepageReducer, {
    ...initialState,
  });

  const [query, setQuery] = useState(initQuery);

  useEffect(() => {
    const initData = async () => {
      if (!query) {
        return dispatch({ type: HOMEPAGE_FETCH_RESET });
      }

      dispatch({ type: HOMEPAGE_FETCH_INIT });
      try {
        const result = await getWeather(query);
        result.daily = result.daily.slice(0, 5);

        dispatch({
          type: HOMEPAGE_FETCH_SUCCESS,
          payload: result,
        });
      } catch {
        dispatch({ type: HOMEPAGE_FETCH_ERROR });
      }
    };

    initData();
  }, [query]);

  return [query, setQuery, state];
}

export default useRequest;
