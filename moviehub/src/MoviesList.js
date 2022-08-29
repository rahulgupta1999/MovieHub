import React ,{useEffect, useState }from 'react';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ViewMovieDetails from './ViewMovieDetails'
import { Link} from "react-router-dom";
import { FaSortAlphaUp } from "react-icons/fa";
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
    const[movies,setMovie]=useState([ ]); 

//Rendering table rows
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
<td><a href={`ViewMovieDetails/${info.id}` } class="btn btn-outline-secondary">Show more</a></td>
</tr>

            );
            
            }
        );
  



// sort by Language
const languagesort =()=>
{
    let sortedMovies=[...movies]

     sortedMovies.sort((a, b) => { 
         if(a.language < b.language)
         {
             return -1;
         }
         if(a.language > b.language)
         {
             return 1;
         }
         return 0;
        });
        setMovie(sortedMovies);
     console.log(sortedMovies);
}
// sort by Name
const namesort =()=>
{
    let sortedMovies=[...movies]

    sortedMovies.sort((a, b) => { 
        if(a.name < b.name)
        {
            return -1;
        }
        if(a.name > b.name)
        {
            return 1;
        }
        return 0;
       });
    console.log(sortedMovies)   
    setMovie(sortedMovies);
}



    return (
      <Table hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Movie Name&nbsp;< FaSortAlphaUp onClick={namesort}/></th>
            <th>Cast</th>
            <th>Language&nbsp;< FaSortAlphaUp onClick={languagesort}/></th>
            <th>Genre</th>
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