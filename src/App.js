import { Card, CardBody, CardTitle, Col, Container } from 'reactstrap';
import './App.css';
import WhoLivesWhere from './whoLivesWhere';

function App() {
  return (
    <Container fluid className='p-3'>
      <Card>
        <CardTitle className='align-self-center'>
          Mega Game
        </CardTitle>
        <CardBody>
          <Col xl='12'>
            <WhoLivesWhere />
          </Col>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
