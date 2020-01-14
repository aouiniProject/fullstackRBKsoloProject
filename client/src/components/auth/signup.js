import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,

        });

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post("/api/users", this.state)
            .then(res => res)
            .catch(err => console.log('nope', err));

    }

    render() {
        return (
            <div className="col-dt-6">
                <h1><b>Sign Up</b></h1>
                <p><b>It’s quick and easy.</b></p>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">

                        <Form.Control
                            name="name"
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Name"
                            required
                        />

                    </Form.Group>
                    <Form.Group className="email">
                        <Form.Control
                            name="email"
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className="password">
                        <Form.Control
                            name="password"
                            value={this.state.value}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="New password"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}