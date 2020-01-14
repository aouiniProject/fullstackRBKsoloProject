import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SignUp from './components/auth/signup.js';
import SignIn from './components/auth/signin'
import Home from './components/team/home';
import Announce from './components/team/announcements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="//" >
          <Container>
            <Row>
              <Col><SignUp></SignUp></Col>
              <Col><SignIn></SignIn></Col>
            </Row>
          </Container>

        </Route>

      </Switch>
    </Router>

  );
}

export default App;
