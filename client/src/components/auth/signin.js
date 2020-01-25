import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { BrowserRouter as Route, Redirect, useHistory } from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false

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

    login() {
        this.setState({ redirect: true })

    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state);

        axios.post("/api/usersIn", this.state)
            .then((res) => {
                if (res.data) {
                    console.log(res.data)
                    localStorage.setItem('name', res.data)
                    this.login()
                }
                console.log(res)
            })
            .catch(err => console.log('nope', err));


    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return (
                <Redirect to='/home' />
            )
        }
        return (

            <div className="col-dt-6">
                <h1><b>SignIn</b></h1>
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
                    <Button variant="primary" type="submit">Login</Button>

                </Form>
            </div>
        )
    }
}