import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Announce from './announcements';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Row>
                <Col sm={2}>
                    <h1>Chat Rooms</h1>

                </Col>
                <Col>
                    <Announce></Announce>
                </Col>

            </Row>

        );
    }
}

export default Home;