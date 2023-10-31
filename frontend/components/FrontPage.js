import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { UserContextProvider } from "./UserContext";
import AccountBox from "./AccountBox";
import Col from "react-bootstrap/Col";
import "./FrontPage.css";

const FrontPage = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <UserContextProvider userData={{ userID, password }}>
      <div className="FrontPage">
        <div className="FrontPage-header">
          <h1 className="md-3">Bank Application</h1>
        </div>
        <Container
          fluid
          className="d-flex flex-column  justify-content-center"
          style={{ color: "white", minHeight: "95vh" }}
        >
          <Row className="justify-content-center">
            <AccountBox />
          </Row>
        </Container>
      </div>
    </UserContextProvider>
  );
};

export default FrontPage;
