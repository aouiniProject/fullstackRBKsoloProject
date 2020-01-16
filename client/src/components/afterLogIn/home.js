import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Announce from './announcements';
import SideBar from '../afterLogIn/sideBar'
import Auth from '../auth/src.auth';

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (

            <Row>
                <Col sm={2}>
                    <SideBar></SideBar>

                </Col>
                <Col>
                    <Announce></Announce>
                </Col>

            </Row>

        );
    }
}

export default Home;