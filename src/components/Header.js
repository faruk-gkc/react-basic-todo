import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" variant="light" bg="light" className="mb-4">
      <Container>
            <h2>Contact Manager</h2>
      </Container>
    </Navbar>
  );
};

export default Header;
