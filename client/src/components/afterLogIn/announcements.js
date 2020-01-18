import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
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
        console.log(event.target);

        axios.delete(`http://localhost:9696/api/delete/${event.target.name}`)
            .then(() => console.log('deleted'))
            .catch((err) => console.log(err))

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/announce', { name: localStorage.getItem('name'), message: this.state.message })
            .then(res => res)
            // .then(()=> {})
            .catch(err => console.log('Error: ', err))

    }

    componentDidMount() {
        axios.get('/api/announce')
            .then((res) => {
                let Mesgs = [];
                for (let i = res.data.length - 1; i >= 0; i--) {

                    Mesgs.push(res.data[i])
                }

                this.setState({ messages: Mesgs });

            })
            .then(() => console.log(this.state.messages))
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    render() {
        const pStyle = {

            "fontSize": "25px"
        }

        const inStyle = {
            "margin-top": "10px"
        }

        return (
            <div className="announcement">
                <div style={inStyle} id='input' >
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col sm="11">
                                <Form.Group controlId="message" >

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
                <div className="chats">
                    {this.state.messages.map(msg => {

                        return (
                            <div className="messages">
                                <hr></hr>
                                <Row>
                                    <Col sm={11}>
                                        <p><b>{msg.name}</b></p>
                                        <p style={pStyle}>{msg.message}</p>
                                    </Col>
                                    <Col sm={1}>

                                        <Button name={msg._id} value="delete" onClick={this.handleDelete} variant="outline-danger">Delete</Button>

                                    </Col>
                                </Row>

                            </div>
                        )
                    })}
                </div>


            </div>
        )
    }
}