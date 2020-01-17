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
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value

        });

    }

    handleDelete(event) {
        event.preventDefault();
        console.log(event.target.name);
        axios.delete(`/api/announce/${event.target.name}`)

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
                console.log(res.data)
                let Mesgs = [];
                for (let i = res.data.length - 8; i < res.data.length; i++) {

                    Mesgs.push(res.data[i])
                }
                console.log(Mesgs)
                this.setState({ messages: Mesgs });

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    render() {
        const pStyle = {

            "font-size": "25px"
        }

        return (
            <div className="announcement">
                <div className="chats">
                    {this.state.messages.map(msg => {
                        return (
                            <div id={msg._id} className="messages">
                                <Row>
                                    <Col sm={11}>
                                        <p style={pStyle}>{msg.message}</p>
                                    </Col>
                                    <Col sm={1}>
                                        <Button name={msg._id} onClick={this.handleDelete} variant="outline-danger">Delete</Button>
                                        {'\n'}
                                        <Button variant="outline-info">Update</Button>
                                    </Col>
                                </Row>

                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
                <div id='input'>
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

                </div>
            </div>
        )
    }
}