import { UserTypes } from "./user.types";

const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case UserTypes.GET_USER_PENDING:
      return { ...state, fetching: true, fetched: false, error: null };
    case UserTypes.GET_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        users: [...action.payload.data]
      };
    case UserTypes.GET_USER_REJECTED:
      return { ...state, fetching: false, fetched: false, error: action.payload };
    case UserTypes.GET_USER_RESET:
      return { ...state, fetching: false, fetched: false, error: false, users: [] };
    default:
      return state
  }
}