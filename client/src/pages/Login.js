import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import "../index.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await userService.login({ username, password });
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/");
    } catch (error) {
      alert("Invalid credentials, please try again or register.");
      navigate("/register");
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      {" "}
      <Card
        className="p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        {" "}
        <Card.Body>
          {" "}
          <h1 className="text-center mb-4">Login</h1>{" "}
          <Form onSubmit={handleSubmit}>
            {" "}
            <Form.Group className="mb-3">
              {" "}
              <Form.Label>Username</Form.Label>{" "}
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />{" "}
            </Form.Group>{" "}
            <Form.Group className="mb-3">
              {" "}
              <Form.Label>Password</Form.Label>{" "}
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
            </Form.Group>{" "}
            <Button variant="primary" type="submit" className="w-100 mb-2">
              {" "}
              Login{" "}
            </Button>{" "}
            <Button
              variant="link"
              className="w-100 text-center"
              onClick={() => navigate("/register")}
            >
              {" "}
              Don't have an account? Register{" "}
            </Button>{" "}
          </Form>{" "}
        </Card.Body>{" "}
      </Card>{" "}
    </Container>
  );
};
export default Login;
