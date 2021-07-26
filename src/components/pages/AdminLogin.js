import { db } from "../../Firebase";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Card } from "react-bootstrap";

import classes from "./Login.module.css";

const Div = styled.div`
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
`;

function AdminLogin() {
  var myController = new AbortController();
  var mySignal = myController.signal;
  const [users, setUser] = useState([]);

  useEffect(() => {
    db.collection("User").onSnapshot((snapshot) => {
      setUser(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <Div>
      <Card className={classes.card}>
        <table id="example" className="display table">
          <thead className="thead-dark">
            <tr>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.UserName}</td>
                  <td>{data.Mail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </Div>
  );
}

export default AdminLogin;
