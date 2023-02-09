import React, { Reducer, ReducerAction } from "react";
import { APIInstance } from "../config/axios";
import {
  fetchReducer,
  setLoading,
  setError,
  setResponse,
  initialState,
} from "../state/reducers/fetch";

type Response = {
  results?: Iterable<unknown>;
};
type APIResponse = {
  loading: boolean;
  error: boolean;
  response: Response;
};

export const useFetch = (
  endpoint: string,
  dependencies: string[] = []
): APIResponse => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);
  const { loading, error, response } = state;

  async function resolver() {
    try {
      const { data } = await APIInstance.get(endpoint);
      setResponse(dispatch, data);
      setLoading(dispatch, false);
    } catch (error) {
      setError(dispatch);
      setResponse(dispatch, []);
    }
  }

  React.useEffect(() => {
    console.log("refresh ep");

    resolver();
  }, [...dependencies]);

  return {
    loading,
    error,
    response,
  };
};
