import React ,{useEffect, useState }from 'react';
import { Table ,Button,Col, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import Pincode from 'react-pincode'
import data from'./api/data'

function MovieView(props)
{
    const [pincodeData, setPincodeData] = useState('');
    const[data,setData]=useState([]);
    useEffect(()=>{
        getAllMoviesFromId();
        },[]);
        
        const getAllMoviesFromId=()=>
        {
            axios.get(`${base_url}/moviebyid/${props.id}`).then(
                (response)=>{
                console.log(response.data);
                setData(response.data);
               
                },
                (error)=>{
                    
                }
                
                )
            }        
           
            const[location,setLocation]=useState({}) 
            const handleForm=(m)=>
            {
                
             axios.get(`${base_url}/getShowByLocation/${data.id}/${location.data.pincode}`).then(
                    (response)=>{
                    console.log(response);
                   console.log("success");
                    },
                    (error)=>{
                        console.log("failed");
                    }
                    
                    )
            
                m.preventDefault();
            }
               
           

    return (
        <div>
    <div>
        <Table hover>
        <thead>
         
        </thead>
        
        <tbody>
                    <tr><th>Name</th><td>{data.name}</td></tr>
                    <tr><th>Cast</th><td>{data.cast}</td></tr>
                    <tr><th>Language</th><td>{data.language}</td></tr>
                    <tr><th>genre</th><td>{data.genre}</td></tr>
        </tbody>
      </Table>
      </div><div>
      <Form onSubmit={handleForm}>
          <FormGroup>
  <Label  for="cast" sm={2} size="lg" ></Label>
  <Col sm={8}>
      
  <Pincode  invalidError="Please check pincode" lengthError="check length" id="location" name="location"  getData={(data)=>{setPincodeData(data)
      setLocation({data}) }}  />
  </Col>
  </FormGroup>
  <FormGroup row>
       <Col sm={8}>
       <button  sm={4} type="submit"  className="btn btn-secondary "  >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              </Col>
              </FormGroup>
  </Form>
      
      </div></div>
         );

}
export default MovieView