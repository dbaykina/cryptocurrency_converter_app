import { GET_RATES } from "./actionTypes";

export function getRates(payload) {
  return { type: GET_RATES, payload };
}
