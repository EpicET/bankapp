import React from 'react'
import { Card } from 'react-bootstrap'

const ExchangePage = () => {
    const [amount, setAmount] = useState(0);
    
  return (
    <div>
        <Card border="dark">
        <Card.Header style={{ color: "white", backgroundColor: "#282c34" }}>
          <h2>Transfer</h2>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} className="mb-1">
            <Form.Label column sm={5}>
              <h3>Base Currency:</h3>
            </Form.Label>
            <Col sm={1}></Col>
            <Col sm={4}>
                <Form.Select aria-label="Default select example">
                    <option>Choose base currency: </option>
                    <option value="1">(USD) US Dollar</option>
                    <option value="2">(GBP) British Pound</option>
                    <option value="3">(CNY) Chinese Yuan</option>
                    <option value="4">(ZAR) South African Rand</option>
                    <option value="5">(BRL) Brazilian Real</option>
                </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-1">
            <Form.Label column sm={5}>
              <h3> Conversion Currency: </h3>
            </Form.Label>
            <Col sm={1}></Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Choose base currency: </option>
                <option value="1">(USD) US Dollar</option>
                <option value="2">(GBP) British Pound</option>
                <option value="3">(CNY) Chinese Yuan</option>
                <option value="4">(ZAR) South African Rand</option>
                <option value="5">(BRL) Brazilian Real</option>
              </Form.Select>
            </Col>
          </Form.Group>
          
          
        </Card.Body>
      </Card>
        </div>
  )
}

export default ExchangePage