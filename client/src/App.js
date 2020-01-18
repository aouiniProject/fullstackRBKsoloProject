import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SignUp from './components/auth/signup.js';
import SignIn from './components/auth/signin'
import Home from './components/afterLogIn/home';
import Announce from './components/afterLogIn/announcements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class App extends Component {

  render() {


    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            {localStorage.getItem('name') ? <Redirect to='/home' /> : (<Container>
              <Row>
                <Col><SignUp></SignUp></Col>
                <Col><SignIn ></SignIn></Col>
              </Row>
            </Container>)}

          </Route>
          <Route exact path="/home" >
            <Home />

          </Route>
          <Route path="*">
            <h1>404 PATH NOT FOUND</h1>
          </Route>

        </Switch>
      </Router >

    )
  }

}

export default App;
