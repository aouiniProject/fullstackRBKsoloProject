import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

export default class Announce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            messages: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value

        });

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/announce', this.state)
            .then(res => res)
            .catch(err => console.log('Error: ', err))

    }

    componentDidMount() {
        axios.get('/api/announce')
            .then((res) => {

                this.setState({ messages: res.data });
                console.log(this.state.messages)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }


    render() {
        const pStyle = {
            margin: "20px",
            "font-size": "25px"
        }
        return (
            <div className="announcement">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="11">
                            <Form.Group controlId="message">

                                <Form.Control
                                    size="lg"
                                    name="message"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Message @annoncement"
                                    required
                                />

                            </Form.Group>
                        </Col>
                        <Col sm="1">
                            <Button size="lg" variant="primary" type="submit">Send</Button>
                        </Col>
                    </Row>
                </Form>
                <div className="chats">
                    {this.state.messages.map(msg => {
                        return (
                            <div className="messages">
                                <p style={pStyle}>{msg.message}</p>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}