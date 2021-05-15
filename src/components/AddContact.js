import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap'
export default class AddContact extends Component {
  render() {
    return (
      <Form className="mt-5">

<Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>


      <Button variant="primary" type="button">
        Add
      </Button>
    </Form>
    );
  }
}
