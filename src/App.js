import React, {useState, useEffect} from 'react';

import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyCard from './Card';

import axios from 'axios';



function App() {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get('https://randomuser.me/api/');
    console.log("RESOPNSE: ", data.results[0].location);

    const cardDetails = data.results[0];

    setDetails(cardDetails)

  }
  
  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className="offset-md-4 mt-4" >
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
