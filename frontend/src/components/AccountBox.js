import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";

import { UserContextProvider } from "./UserContext";

import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Tab, Tabs } from "react-bootstrap";

const AccountBox = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createError, setCreateError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const handleCreate = (event) => {
    event.preventDefault();
    const userData = {
      userID: userID,
      password: password,
    };

    setLoading(true);

    api
      .post(`/api/v1/user/register`, userData)
      .then((response) => {
        console.log(response);
        setLoading(false);
        navigate(`/home/${userData.userID}`);
      })
      .catch((error) => {
        setCreateError("Account already exists.");
        console.error(error);
        setLoading(false);
      });

    setUserID("");
    setPassword("");
  };

  const handleLog = (event) => {
    event.preventDefault();
    const userData = {
      userID: userID,
      password: password,
    };

    setLoading(true);

    api
      .post(`/api/v1/user/login`, userData)
      .then((response) => {
        console.log(response);
        setLoading(false);
        navigate(`/home/${userData.userID}`);
      })
      .catch((error) => {
        setLoginError("Account userID or password is incorrect.");
        console.error(error);
        setLoading(false);
      });

    setUserID("");
    setPassword("");
  };
  return (
    <Card style={{ width: "35rem" }} bg="secondary" text="light">
      <Card.Body>
        <Tabs
          defaultActiveKey="create"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="create" title="Create Account">
            {/* <Card.Title className="fs-3 mb-4">Create Account</Card.Title> */}
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
              <Button
                variant="light"
                onClick={handleCreate}
                size="lg"
                className="mb-3"
              >
                Submit
              </Button>
              {createError && (
                <Alert className="justify-center" variant="danger">
                  {createError}
                </Alert>
              )}
            </Form>
          </Tab>
          <Tab eventKey="log" title="Log In">
            {/* <Card.Title className="fs-3 mb-4">Log In</Card.Title> */}
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
              <Button
                variant="light"
                size="lg"
                onClick={handleLog}
                className="mb-3"
              >
                Submit
              </Button>
              {loginError && (
                <Alert className="justify-center" variant="danger">
                  {loginError}
                </Alert>
              )}
            </Form>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default AccountBox;
