export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_RESPONSE = "SET_RESPONSE";

type Response = {
  results?: Iterable<unknown>;
};
export interface APIResponse {
  loading: boolean;
  error: boolean;
  response: Response;
};

export const initialState: APIResponse = {
  loading: true,
  error: false,
  response: {},
};

export const setLoading = (dispatch: Function, payload: unknown) => {
  dispatch({ type: SET_LOADING, payload });
};

export const setError = (dispatch: Function) => {
  dispatch({ type: SET_ERROR });
};

export const setResponse = (dispatch: Function, payload: unknown) => {
  dispatch({ type: SET_RESPONSE, payload });
};

export const fetchReducer = (state: APIResponse, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    case SET_RESPONSE: {
      return {
        ...state,
        loading: false,
        error: false,
        response: action.payload,
      };
    }

    default:
      return state;
  }
};
