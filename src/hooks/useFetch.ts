import React from "react";
import { APIInstance } from "../config/axios";
import {
  fetchReducer,
  setLoading,
  setError,
  setResponse,
  initialState,
  APIResponse
} from "../state/reducers/fetch";

export const useFetch = (
  endpoint: string,
  dependencies: string[] = []
): APIResponse => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);
  const { loading, error, response } = state;

  async function resolver() {
    try {
      console.log("etra");
      
      setLoading(dispatch,true)
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
