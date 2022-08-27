import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddMovie=()=> {
 
    return (
        <Fragment>
            <h1 className="text-center my-3">Add Movie Details</h1>
            <br/>
        <Form>
          <FormGroup row>
            <Label  for="name" sm={2} size="lg" ></Label>
            <Col sm={8}>
              <Input type="text" name="name" id="Name" placeholder="Movie Name"  />
            </Col>
          </FormGroup>
        
          <FormGroup row>
            <Label  for="cast" sm={2} size="lg" ></Label>
            <Col sm={8}>
              <Input type="text" name="Cast" id="Cast" placeholder="Cast Name"  />
            </Col>
          </FormGroup>
        
        </Form>

        </Fragment>
      );
  }
  export default  AddMovie