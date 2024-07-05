import '../App.scss';
import Articles from './Article';  
import { Col, Container, Row } from 'react-bootstrap';
import StickyHeader from './StickyHeader';


function Main() {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={12}><StickyHeader/></Col>
            <Col className='article_wrap'>
              <Articles/>  
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Main;
