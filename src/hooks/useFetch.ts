import React from "react";
import { APIInstance } from "../config/axios";

type APIResponse = {
  loading: boolean;
  error: boolean;
  response: unknown;
};

export const useFetch = (
  endpoint: string,
  dependencies: string[] = []
): APIResponse => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<unknown>(null);

  async function resolver() {
    try {
      setLoading(true);
      const { data } = await APIInstance.get(endpoint);
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setResponse(null);
    }
  }

  React.useEffect(() => {
    resolver();
  }, [...dependencies]);

  return {
    loading,
    error,
    response,
  };
};
