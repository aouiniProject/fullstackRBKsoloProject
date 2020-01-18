import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Announce from './announcements';
import SideBar from '../afterLogIn/sideBar'


class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        if (localStorage.getItem('name')) {

            return (<Row>
                <Col sm={2}>
                    <SideBar></SideBar>

                </Col>
                <Col>
                    <Announce></Announce>
                </Col>

            </Row>)
        }

        return (
            <h1>Your not supposed to be hear</h1>

        );
    }
}

export default Home;