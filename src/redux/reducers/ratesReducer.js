import { GET_RATES } from "../actions/actionTypes";
const initState = {};

export default function ratesReducer(state = initState, action) {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        rates: action.payload,
      };

    default:
      return state;
  }
}
