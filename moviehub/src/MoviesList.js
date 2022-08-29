import React ,{useEffect, useState }from 'react';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ViewMovieDetails from './ViewMovieDetails'
import { Link} from "react-router-dom";
const MoviesList = ()=>{
   
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
    const[movies,setMovie]=useState([
    
        
        
        ]); //creating data

        var i=1;
       
        const tableRows=movies.map((info)=>
        {
            
            return(
               
<tr>
    <td>{i++}</td>
<td>{info.name}</td>
<td>{info.cast}</td>
<td>{info.language}</td>
<td>{info.genre}</td>
<td>{info.TotalLocations}</td>
<td><a href={`ViewMovieDetails/${info.id}` } class="btn btn-outline-secondary">Show more</a></td>
</tr>

            );
            
            }
        );
  
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Movie Name</th>
            <th>Cast</th>
            <th>Language</th>
            <th>Genre</th>
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