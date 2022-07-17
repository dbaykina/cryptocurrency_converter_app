import Rate from "./Rate";
import { useSelector } from "react-redux";
import { Table, Container } from "react-bootstrap";

const RateList = () => {
  const rates = useSelector((state) => state.rates);

  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {rates && rates.map((item) => <Rate key={item[0]} item={item} />)}
        </tbody>
      </Table>
    </Container>
  );
};

export default RateList;
