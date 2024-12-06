import React from "react";
import passwordService from "../services/passwordService";
import { ListGroup, Button, Container } from "react-bootstrap";

const PasswordList = ({ passwords, fetchPasswords }) => {
  const handleDelete = async (id) => {
    try {
      await passwordService.deletePassword(id);
      fetchPasswords();
    } catch (error) {
      console.error("Error deleting password:", error);
    }
  };

  return (
    <Container>
      <h2>Stored Passwords</h2>
      <ListGroup>
        {passwords.map((password) => (
          <ListGroup.Item key={password.id}>
            <strong>{password.title}</strong> - {password.username}
            <Button
              variant="danger"
              onClick={() => handleDelete(password.id)}
              className="float-right"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PasswordList;
