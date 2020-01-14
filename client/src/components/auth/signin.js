import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,

        });

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.get("/api/users", this.state)
            .then(res => res)
            .catch(err => console.log('nope', err));

    }

    render() {
        return (
            <div className="col-dt-6">
                <h1><b>SignIn</b></h1>
                <p><b>you'll be able to chat without any one spyin on you</b></p>
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="email">
                        <Form.Control
                            size="lg"
                            name="email"
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </Form.Group>
                    <br ></br>
                    <Form.Group className="password">
                        <Form.Control
                            size="lg"
                            name="password"
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </div>
        )
    }
}