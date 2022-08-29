
import React ,{useEffect, useState }from 'react';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Pincode from 'react-pincode'
import { Col, Form, FormGroup, Label, Input} from 'reactstrap';
function AssignShow()
{
   const[pincodeData,setPincodeData]=useState('');
        useEffect(()=>{
        getAllMoviesFromServer();
        },[]);
        
        const getAllMoviesFromServer=()=>
        {
         axios.get(`${base_url}/movies`).then(
        (response)=>{
        console.log(response.data);
        toast("Movie List has been updated");
        setMovie(response.data)
        },
        (error)=>{
            toast("Something went wrong");
            console.log(error);
        }
        
        
            )
        }
        const[show,setShow]=useState({})

        const handleForm2=(m)=>
        {
           postDatatoServer(show);
            m.preventDefault();
        }

        const postDatatoServer=(data)=>{
           axios.post(`${base_url}/addshow`,data).then(
            (response)=>{
            console.log(response);
            console.log("Sucess");
            setShow({});
            },
            (error)=>{
            
                console.log(error);
                console.log("error");
            }
            
            
            )
            console.log(data);
                 };
        
            const[movies,setMovie]=useState([]); //creating data
        
                var i=1;
                const movieoption=movies.map((info)=>
                {
                    
                    return(
        
                        <option value={info.id}>{info.name}</option>
        
                    );
                    
                    }
                );
          
            return (
<div>

                               
            



                      


<Form onSubmit={handleForm2}>
<FormGroup row>
  <Label  for="name" sm={2} size="lg" ></Label>
  <Col sm={8}>
  <select  className="btn btn-outline-secondary" name="movieid" id="movieid" onChange={ (m)=>{
                        setShow({...show,movieId:m.target.value})}} required>
                    <option value="#" hidden>&nbsp;&nbsp;&nbsp;Choose a Movie&nbsp;&nbsp;&nbsp;</option>
                 {movieoption}
                </select>
       
  </Col>
</FormGroup>

<FormGroup row>
  <Label  for="cast" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Pincode  invalidError="Please check pincode" lengthError="check length" id="location" name="location"  getData={(data)=>{setPincodeData(data)
     setShow({...show,location:data}) }}  />
  </Col>
</FormGroup>
<FormGroup row>
  <Label  for="cast" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Input type="text" name="theater" id="theater" placeholder="Enter theater name"  onChange={ (m)=>{
                        setShow({...show,theater:m.target.value})}} ></Input>
  </Col>
</FormGroup>
<FormGroup row>
  <Label  for="Price" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Input type="number" name="price" id="price" placeholder="Enter ticket price in INR Example:250" onChange={ (m)=>{
                        setShow({...show,price:m.target.value})}}></Input>
  </Col>
</FormGroup>

<FormGroup row>
  <Label  for="Price" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Input type="date" name="date" id="date" placeholder="Select date" onChange={ (m)=>{
                        setShow({...show,date:m.target.value})}}/>
     
  </Col>
</FormGroup>
<FormGroup row>
  <Label  for="Price" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Input type="time" name="time" id="time" placeholder="Select timer" onChange={ (m)=>{
                        setShow({...show,time:m.target.value})}}/>
  </Col>
</FormGroup>
<FormGroup row>
       <Col sm={8}>
       <button  sm={4} type="submit"  className="btn btn-secondary "  >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button  sm={4} type="reset"  className="btn btn-danger " >Reset</button>
          
              </Col>
              </FormGroup>
</Form>
</div>
            );
}
export default AssignShow