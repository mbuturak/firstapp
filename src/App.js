import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Product from "./components/Product";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCat: [],
  };

  changeCatName = (category) => {
    this.setState({ currentCat: category });
  };

  render() {
    let catTitle = "Kategoriler";
    let prodTitle = "Ürünler";
    return (
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <Col sm="3">
            <Category changeCategory={this.changeCatName} title={catTitle} />
          </Col>
          <Col sm="9">
            <Product
              currentCategory={this.state.currentCat}
              title={prodTitle}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
