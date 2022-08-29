import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Sidebar extends React.Component {
  
  render() {
    return (
     
      <ListGroup>
          <ListGroupItem  tag="a" href="/" action   className="btn btn-outline-secondary" >Movies</ListGroupItem>
           
          <ListGroupItem  tag="a" href="/add-movie" className="btn btn-outline-secondary" action >Add Movie</ListGroupItem>
          <ListGroupItem  tag="a" href="/assignshow" className="btn btn-outline-secondary" action >Add New Show</ListGroupItem>
           </ListGroup>

    );
  }
}