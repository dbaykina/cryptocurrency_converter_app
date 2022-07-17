import { getRates } from "../actions/actions";
import axios from "axios";

const URL = "http://localhost:9000/";

export const getCurrentRates = () => {
  return (dispatch) => {
    const data = axios.get(URL);
    data
      .then((data) => {
        const fetchedData = data.data;
        const arr = Object.entries(fetchedData);
        dispatch(getRates(arr));
      })
      .catch((err) => console.log(err));
  };
};
