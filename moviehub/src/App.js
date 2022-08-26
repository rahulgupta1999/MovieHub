
import './App.css';
import Sidebar from './Sidebar'
import MovieList from './MoviesList';
import Home from './Home'
import {Container,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Home></Home>
<Container>
   <Row>
     <Col md={4}>
      
     </Col>
     <MovieList></MovieList>
     <Col md={8}>
     </Col>
</Row>

      </Container>
    </div>
  );
}

export default App;
