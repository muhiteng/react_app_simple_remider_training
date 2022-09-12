//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center my-2">
          <Col sm="8">لديك 4 مواعيد اليوم</Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2 ">
              <div className="d-flex border-bottom mx-3 my-2">
                <img src="p1.jpg" className="img-avatar" alt=""></img>
                <div className="px-3">
                  <p className="d-inline fs-5">محمد احمد </p>
                  <p className="fs-6">السابعة مساءا</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style p-2"> مسح الكل</Button>
            <Button className="btn-style p-2"> عرض الكل</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
