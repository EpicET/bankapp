import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Transfer from "./Transfer";
import { api } from "../../api/axiosConfig";
import PieChart from "./PieChart";
import AccList from "./AccList";
import OpenAccount from "./OpenAccount";
import "./Home.css";

import Exchange from "./Exchange";

const Home = () => {
  const [user, setUser] = useState([]);
  //const { user, updateUser, fetchUser } = useContext(UserContext);
  //const { userID, password, accList } = user;
  const { userID } = useParams();
  const [password, setPassword] = useState();
  const [accList, setAccList] = useState([]);
  const [accNum, setAccNum] = useState();

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  function openAcc(type) {
    api
      .post(`/api/v1/user/${userID}/${type}`)
      .then((response) => {
        console.log(response);
        //fetchUser();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getUser = () => {
    api
      .get(`/api/v1/user/${userID}`)
      .then((response) => {
        setUser(response.data);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [userID]);

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (key === "userID") {
          user.id = value;
        } else if (key === "password") {
          setPassword(value);
        } else if (key === "accountList") {
          setAccList(value);
        } else if (key === "numOfAccounts") {
          setAccNum(value);
        }
      });
    }
  }, [user]);

  return (
    <div className="Home">
      {/* <Header password={password} /> */}
      <Container>
        <Row className="mb-5">
          <h2>Welcome {userID}</h2>
        </Row>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col key={1}>
            <Card border="dark">
              <AccList userID={userID} accList={accList} />
              <OpenAccount userID={userID} openAcc={openAcc} />
            </Card>
          </Col>
          <Col key={2}>
            <Transfer user={user} getUser={getUser} updateUser={updateUser} />
          </Col>
          <Col key={3}>
            <Card style={{ width: "32rem" }} className="mb-2">
              {accList.length > 0 ? (
                <PieChart accounts={accList} />
              ) : (
                <Card.Header>No accounts</Card.Header>
              )}
            </Card>
          </Col>
          <Col key={4}>
            {/* <Card className="mb-4">
              <AccountsHistory accounts={accList} />
            </Card> */}
            <Card border="dark" className="mb-2">
              <Exchange />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
