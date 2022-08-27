import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
                
              <Input type="text" name="Cast" id="Cast" placeholder="Cast Name" multiple />
            </Col>
          </FormGroup>
          <FormGroup row>
            
            <Col sm={8}>
            <Label  for="Language" sm={4} size="lg" ></Label>
            <select class="btn btn-outline-secondary" name="language" id="language">
            <option value="#" hidden>&nbsp;Choose a language&nbsp;</option>
            <option value="English"> English</option>	
            <option value="Hindi"> Hindi</option>
<option value="Assamese"> Assamese</option>
<option value="Bengali"> Bengali</option>
<option value="Bhojpuri"> Bhojpuri</option>
<option value="Gujarati"> Gujarati</option>

<option value="Kannada"> Kannada</option>
<option value="Malayalam"> Malayalam</option>
<option value="Marathi"> Marathi</option>
<option value="Odia"> Odia</option>
<option value="Punjabi"> Punjabi</option>
<option value="Tamil"> Tamil</option>
<option value="Telugu"> Telugu</option>


	</select>
	
            </Col>
          </FormGroup>
          <FormGroup row>
          
            <Col sm={8}>
            
<Label  for="genre" sm={4} size="lg" ></Label>
<select  class="btn btn-outline-secondary" name="genere" id="genere">
<option value="#" hidden>&nbsp;&nbsp;&nbsp;Choose a genere&nbsp;&nbsp;&nbsp;</option>
<option value="Action">Action</option>
<option value="Comedy">Comedy</option>
<option value="Drama">Drama</option>
<option value="Fantasy">Fantasy</option>
<option value="Horror">Horror</option>
<option value="Mystery">Mystery</option>
<option value="Romance">Romance</option>
<option value="Thriller">Thriller</option>
<option value="Western">Western</option>
  
</select>
            </Col>
          </FormGroup>
   <br/>
   <FormGroup row>
   <Col sm={8}>
            
          <button  sm={4} type="button"  class="btn btn-secondary " >Submit</button>&nbsp;&nbsp;&nbsp;
          <button  sm={4} type="button"  class="btn btn-primary " >Assign Show</button>
          </Col>
          </FormGroup>
        </Form>

        </Fragment>
      );
  }
  export default  AddMovie

 