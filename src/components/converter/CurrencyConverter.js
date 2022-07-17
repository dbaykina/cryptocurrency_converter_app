import { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const CurrencyConverter = () => {
  const [options, setOptions] = useState([]);
  const [amountOfCurrency, setAmountOfCurrency] = useState("");
  const [selectInputCurrency, setSelectInputCurrency] = useState({});
  const [selectExchangeCurrency, setSelectExchangeCurrency] = useState({});
  const [result, setResult] = useState("");

  const rates = useSelector((state) => state.rates);

  useEffect(() => {
    rates && populateOptions(rates);
  }, [rates]);

  const populateOptions = () => {
    let optionsArr = [];
    const option =
      rates &&
      rates.map((rate) => optionsArr.push({ label: rate[0], value: rate[0] }));
    setOptions(optionsArr);
  };

  const onChangeInput = (e) => {
    const { value } = e.target;
    setAmountOfCurrency(value);
  };

  const getSpecificRates = async (
    selectInputCurrency,
    selectExchangeCurrency
  ) => {
    try {
      const response = await axios.get("http://localhost:9000/converter");
      const fetchedRates = response.data;

      const rates = Object.entries(fetchedRates);

      let specificCurruncies = [];

      const inputCurrency = rates
        .filter((rate) => rate[0] === selectInputCurrency.label)
        .map((filteredRate) => (specificCurruncies[0] = filteredRate[1]));

      const exchangeCurrency = rates
        .filter((rate) => rate[0] === selectExchangeCurrency.label)
        .map((filteredRate) => (specificCurruncies[1] = filteredRate[1]));

      return specificCurruncies;
    } catch (err) {
      console.log(err);
    }
  };

  const onConvert = async (e) => {
    e.preventDefault();

    let arr = [];
    arr = await getSpecificRates(selectInputCurrency, selectExchangeCurrency);
    const calculatedValue = ((amountOfCurrency * arr[0]) / arr[1]).toFixed(4);
    setResult(calculatedValue);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Form onSubmit={onConvert} style={{ marginTop: "10px" }}>
            <Form.Group
              className="mb-3"
              controlId="amountOfCurrency"
              onChange={onChangeInput}
            >
              <Form.Control
                type="number"
                placeholder="Введите количество валюты"
              />
            </Form.Group>
            <Form.Group>
              <Select
                name="select1"
                className="base-currency"
                options={options}
                onChange={setSelectInputCurrency}
                selected={selectInputCurrency}
              />

              <Select
                name="select2"
                className="exchange-currency"
                options={options}
                onChange={setSelectExchangeCurrency}
                selected={selectExchangeCurrency}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Конвертировать
            </Button>
          </Form>
        </Col>
        <Col className="exchange-result" md={{ span: 3, offset: 3 }}>
          <div>
            Результат:
            <span style={{ fontSize: "20px", marginLeft: "10px" }}>
              {result}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrencyConverter;
