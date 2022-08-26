import React ,{useState }from 'react';
import { Table } from 'reactstrap';
const MoviesList = ()=>{

    const[movies,setMovie]=useState([
        
        {id:1,Name:"Article 370",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:200 },
        {id:2,Name:"Hum",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:300 },
        {id:3,Name:"Boothnath",cast:"Amitab bachan", language:"Hindi" ,genere:"Action" ,TotalLocations:150 }
       
        
        
        ]); //creating data

const index=0;
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
          </tr>
        </thead>
        <tbody>
         {tableRows}
        </tbody>
      </Table>
    );
  
}
export default  MoviesList