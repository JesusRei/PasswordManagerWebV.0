import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddPasswordForm from "../components/AddPasswordForm";
import PasswordList from "../components/PasswordList";
import passwordService from "../services/passwordService";
import "../index.css";

const Dashboard = () => {
  const [passwords, setPasswords] = useState([]);
  const navigate = useNavigate();

  const fetchPasswords = async () => {
    try {
      const passwords = await passwordService.getPasswords();
      setPasswords(passwords);
    } catch (error) {
      console.error("Error fetching passwords:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return (
    <Container className="dashboard-container">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <h1 className="text-primary">El Mejor Gestor de Contraseñas</h1>
            </Col>
            <Col xs="auto">
              <Button variant="danger" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            </Col>
          </Row>
          <AddPasswordForm fetchPasswords={fetchPasswords} />
        </Card.Body>
      </Card>
      <PasswordList passwords={passwords} fetchPasswords={fetchPasswords} />
    </Container>
  );
};

export default Dashboard;
