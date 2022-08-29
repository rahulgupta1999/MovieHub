import React ,{useEffect, useState }from 'react';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import base_url from './api/bootapi';
import axios from "axios";
import MovieView from './MovieView';
import data from'./api/data'

class ViewMovieDetails extends React.Component {
    
    
  render() {
    const{id}=this.props.match.params;
  
        






     
    return (

       <MovieView id={id}/>
    
        );
  }
}

export default ViewMovieDetails