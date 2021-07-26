import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import logo from "./images/logodevarena.png";
import { Link, useHistory } from "react-router-dom";
import classes from "./Login.module.css";
import styled from "styled-components";
import Coding from "./images/coding.svg";
import { UserContext } from "../../App";
export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (
        emailRef.current.value === "admin@admin.com" &&
        passwordRef.current.value === "123456"
      ) {
        history.push("/admin");
        dispatch({ type: "ADMIN", payload: "ADMIN" });
      } else {
        history.push("/loginsucess");
        dispatch({ type: "USER", payload: "USER" });
      }
    } catch {
      setError("Failed to login :/");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className={classes.card}>
        <Card.Body>
          <h2 className="text-center  text-dark mb-4">LogIn</h2>

          <div className="mt-5 mb-5 text-center">
            <img src={logo} className="rounded" alt="logo"></img>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
          {/* form for Email input */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            {/* form for Password input */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            {/* button for  for normal sign up*/}
            <Button
              disabled={loading}
              className="mt-2 w-100 center"
              type="submit"
            >
              Log in
            </Button>
            <p className="text-justify text-center mt-2 mb-1">-or-</p>
            {/* button for Google sign up */}
            <Button
              disabled={loading}
              className="mt-2 w-100 center btn btn-light"
              type="submit"
            >
              Google
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up.</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
