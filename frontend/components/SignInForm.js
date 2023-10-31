import React from "react";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const SignInForm = ({ userID, password, setUserID, setPassword }) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3 justify-content-md-center">
        <Form.Label column sm={6}>
          Enter userID:
        </Form.Label>
        <Col>
          <Form.Control
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3 justify-content-md-center"
        controlId="formHorizontalPassword"
      >
        <Form.Label column>Enter password:</Form.Label>
        <Col sm={6}>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SignInForm;
