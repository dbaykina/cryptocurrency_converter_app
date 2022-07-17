import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import RateList from "./components/rates/RatesList";
import CurrencyConverter from "./components/converter/CurrencyConverter";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentRates } from "./redux/thunk/thunk";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentRates());
  }, []);

  return (
    <>
      <Router>
        {<Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rates" element={<RateList />} />
          <Route path="/converter" element={<CurrencyConverter />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
