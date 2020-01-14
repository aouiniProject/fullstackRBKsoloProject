import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SignUp from './components/auth/signup.js';
import SignIn from './components/auth/signin'

function App() {
  return (
    <Container>
      <Row>
        <Col><SignUp></SignUp></Col>
        <Col><SignIn></SignIn></Col>
      </Row>
    </Container>
  );
}

export default App;
