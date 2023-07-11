import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
          <h1>Hello?0</h1>
        </Row>
        <Row>
          <Col>
            <CategoryList></CategoryList>
          </Col>
          <Col>
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
