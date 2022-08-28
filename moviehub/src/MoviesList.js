import React ,{useEffect, useState }from 'react';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
const MoviesList = ()=>{
useEffect(()=>{
getAllCoursesFromServer();
},[]);

const getAllCoursesFromServer=()=>
{
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
      
    axios.get(`${base_url}/movies`,config).then(
(response)=>{
console.log(response);

},
(error)=>{

    console.log(error);
}


    )
}
    const[movies,setMovie]=useState([
        
        {id:1,Name:"Article 370",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:200 },
        {id:2,Name:"Hum",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:300 },
        {id:3,Name:"Boothnath",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:150 }
       
        
        
        ]); //creating data

      
        const tableRows=movies.map((info)=>
        {
            
            return(
<tr>
    <td>{info.id}</td>
<td>{info.Name}</td>
<td>{info.cast}</td>
<td>{info.language}</td>
<td>{info.genere}</td>
<td>{info.TotalLocations}</td>
<td><button  type="button"  class="btn btn-outline-primary" >Show more</button></td>
</tr>

            );
            
            }
        );
  
    return (
      <Table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Movie Name</th>
            <th>Cast</th>
            <th>Language</th>
            <th>Genere</th>
            <th>Total no of locations</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
         {tableRows}
        </tbody>
      </Table>
    );
  
}
export default  MoviesList