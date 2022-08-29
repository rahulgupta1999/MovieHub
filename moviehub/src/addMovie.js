import React, { Fragment,useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import base_url from './api/bootapi';
import {Link} from 'react-router-dom'

const AddMovie=()=> {
 
   useEffect(()=>{

document.title="Add Movie"
   },[]);
    const[movie,setMovie]=useState({});

     const handleForm=(m)=>
     {
        setMovie({...movie,id:0})
         console.log(movie);
         postDatatoServer(movie);
         m.preventDefault();
     }
     const postDatatoServer=(data)=>{
axios.post(`${base_url}/addmovie`,data).then(
(response)=>{
console.log(response);
console.log("Sucess");
setMovie({});

},
(error)=>{

    console.log(error);
    console.log("error");
}


)
     };
        return (
            <Fragment>
                <h1 className="text-center my-3">Add Movie Details</h1>
                <br/>
            <Form onSubmit={handleForm}>
              <FormGroup row>
                <Label  for="name" sm={2} size="lg" ></Label>
                <Col sm={8}>
                  <Input type="text" name="name" id="Name" placeholder="Movie Name"  onChange={ (m)=>{
                        setMovie({...movie,name:m.target.value})
                      }
                  }   required/>
                </Col>
              </FormGroup>
            
              <FormGroup row>
                <Label  for="cast" sm={2} size="lg" ></Label>
                <Col sm={8}>
                    
                  <Input type="textarea" name="Cast" id="Cast" placeholder="Enter cast names" style={{height:150}} onChange={ (m)=>{
                        setMovie({...movie,cast:m.target.value})
                      }
                  }  required/>
                </Col>
              </FormGroup>
              <FormGroup row>
                
                <Col sm={8}>
                <Label  for="Language" sm={4} size="lg" ></Label>
                <select className="btn btn-outline-secondary" name="language" id="language" onChange={ (m)=>{
                        setMovie({...movie,language:m.target.value})
                      }} required>
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
    <select  className="btn btn-outline-secondary" name="genr" id="genre"  onChange={ (m)=>{
                        setMovie({...movie,genre:m.target.value})
                      }}  required >
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
       <button  sm={4} type="submit"  className="btn btn-secondary "  >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button  sm={4} type="reset"  className="btn btn-danger " >Reset</button>
          
              </Col>
              </FormGroup>
            </Form>
    
            </Fragment> 
          );
      }
  
  export default  AddMovie

 