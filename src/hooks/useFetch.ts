import React from "react";
import { APIInstance } from "../config/axios";


type Response = {
  results? : Iterable<unknown>
}
type APIResponse = {
  loading: boolean;
  error: boolean;
  response: Response;
};

export const useFetch = (
  endpoint: string,
  dependencies: string[] = []
): APIResponse => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState({});
  
  async function resolver() {
    try {
      setLoading(true);
      const { data } = await APIInstance.get(endpoint);
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setResponse([]);
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
