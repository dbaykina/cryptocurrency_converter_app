const Rate = ({ item }) => {


  return (
    <tr>
      <td>{item[0]}</td>
      <td>{`${item[1]} USD`}</td>
    </tr>
  );
};

export default Rate;


