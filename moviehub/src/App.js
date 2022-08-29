
import './App.css';
import Sidebar from './Sidebar'
import MoviesList from './MoviesList';
import Home from './Home'
import {Container,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import AssignShow from './AssignShow'
import { BrowserRouter as Router,Route} from "react-router-dom";
import ViewMovieDetails from './ViewMovieDetails';
function App() {
  return (
    
      <Router>
<div className="App">
     <Home></Home><br/>
<Container>
   <Row >
        <Col md={2} >
      <Sidebar></Sidebar>
        </Col>
    
        <Col md={8}>

          <Route path="/"  component={MoviesList}  exact/>
          <Route path="/add-movie" component={AddMovie} exact></Route>
          <Route path="/assignshow" component={AssignShow} exact></Route>
          <Route path="/ViewMovieDetails/:id" component={ViewMovieDetails} exact></Route>
        </Col>
    </Row>


      </Container>
      </div>
      </Router>
   
  );
}

export default App;
