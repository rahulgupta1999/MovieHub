import React ,{useEffect, useState }from 'react';
import { Table ,Button,Col, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import Pincode from 'react-pincode'
import data from'./api/data'

function MovieView(props)
{
    const [anyshow,setTrue]=useState(false);
    const [pincodeData, setPincodeData] = useState('');
    const[data,setData]=useState([]);
    const[shows,setShow]=useState([])
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
                    console.log(response.data);
                  setShow(response.data);
                   console.log(shows.data);
                  setTrue(true);
                    },
                    (error)=>{
                        console.log("failed");
                    }
                    
                    )
            
                m.preventDefault();
            }
            var i=1;
            const tableRows=shows.map((info)=>
            {
                
                return(
                   
    <tr>
        <td>{i++}</td>
    <td>{info.theater}</td>
    <td>{info.location.city}</td>
    <td>{info.location.stateName}</td>
    <td>{info.price}</td>
  
    </tr>
    
                );
                
                }
            );
           
            if(!anyshow)
            {
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
             
              </div>
              
              <Table hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Theater Name</th>
            <th>City</th>
            <th>State</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {tableRows}
        </tbody>
      </Table>

              
              
              
              
              
              
              </div>
        
             
                 );

}
export default MovieView