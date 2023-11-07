import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { exchange } from "../../api/axiosConfig";
import Button from "react-bootstrap/Button";

const Exchange = () => {
  const [amount, setAmount] = useState(0);
  const [newAmount, setNewAmount] = useState();
  const [result, setResult] = useState();
  const [curr1, setCurr1] = useState();
  const [curr2, setCurr2] = useState();

  const exchange_key = process.env.EXCHANGE_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    exchange
      .get(`v6/${exchange_key}/pair/${curr1}/${curr2}/${amount}`)
      .then((response) => {
        setResult(response.data);
        setNewAmount(result.conversion_result);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const converter = (curr1, curr2, amount) => {};

  // useEffect(() => {
  //   if (curr1 && curr2 && amount) {
  //     converter(curr1, curr2, amount);
  //   }
  // }, [curr1, curr2, amount]);

  return (
    <div>
      <Card.Header style={{ color: "white", backgroundColor: "#282c34" }}>
        <h2>Currency Exchange</h2>
      </Card.Header>
      <Card.Body>
        <Form.Group as={Row} className="mb-1 justify-content-center">
          <Col sm={5}>
            <Form.Select onChange={(e) => setCurr1(e.target.value)}>
              <option>Currencies</option>
              <option value="USD">(USD) US Dollar</option>
              <option value="GBP">(GBP) British Pound</option>
              <option value="CNY">(CNY) Chinese Yuan</option>
              <option value="ZAR">(ZAR) South African Rand</option>
              <option value="BRL">(BRL) Brazilian Real</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <Form.Control
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-1 justify-content-center">
          <Col sm={5}>
            <Form.Select onChange={(e) => setCurr2(e.target.value)}>
              <option>Currencies</option>
              <option value="USD">(USD) US Dollar</option>
              <option value="GBP">(GBP) British Pound</option>
              <option value="CNY">(CNY) Chinese Yuan</option>
              <option value="ZAR">(ZAR) South African Rand</option>
              <option value="BRL">(BRL) Brazilian Real</option>
            </Form.Select>
          </Col>
          <Form.Label column sm={4}>
            {newAmount}
          </Form.Label>
        </Form.Group>
        <Row className="justify-content-md-center">
          <Col sm={2}>
            <Button
              variant="dark"
              onClick={handleSubmit}
              className="mb-3"
            ></Button>
          </Col>
        </Row>
      </Card.Body>
    </div>
  );
};

export default Exchange;
