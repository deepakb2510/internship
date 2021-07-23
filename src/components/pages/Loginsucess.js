import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";

export default function Loginsucess() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();

      history.push("/login"); /* redirectuser to login on logout */
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card className="mx-auto w-50">
        <Card.Body>
          {/* Card for user info update*/}
          <h2 className="text-center text-dark mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="text-dark">Email: {currentUser.email}</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            {" "}
            {/* redirect user to update profile */}
            Update Profile
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
