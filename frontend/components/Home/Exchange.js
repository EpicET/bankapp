import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { exchange } from "../../api/axiosConfig";

const Exchange = () => {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [newAmount, setNewAmount] = useState(0);
  const [result, setResult] = useState();
  const [curr1, setCurr1] = useState();
  const [curr2, setCurr2] = useState();

  const converter = (curr1, curr2, amount) => {
    // exchange
    //   .get(`v6/${exchange_key}/pair/${curr1}/${curr2}/${amount}`, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => {
    //     setResult(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  useEffect(() => {
    if (curr1 && curr2 && amount) {
      converter(curr1, curr2, amount);
    }
  }, [curr1, curr2, amount]);

  return (
    <div>
      <Card.Header style={{ color: "white", backgroundColor: "#282c34" }}>
        <h2>Currency Exchange</h2>
      </Card.Header>
      <Card.Body>
        <Form.Group as={Row} className="mb-1 justify-content-center">
          <Col sm={5}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCurr1(e.target.value)}
            >
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
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCurr2(e.target.value)}
            >
              <option>Currencies</option>
              <option value="USD">(USD) US Dollar</option>
              <option value="GBP">(GBP) British Pound</option>
              <option value="CNY">(CNY) Chinese Yuan</option>
              <option value="ZAR">(ZAR) South African Rand</option>
              <option value="BRL">(BRL) Brazilian Real</option>
            </Form.Select>
          </Col>
          <Form.Label column sm={4}>
            {/* {converter(curr1, curr2, amount)} */}
            {newAmount}
          </Form.Label>
        </Form.Group>
      </Card.Body>
    </div>
  );
};

export default Exchange;
