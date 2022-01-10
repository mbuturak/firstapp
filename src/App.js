import React, { Component } from "react";
import Category from "./components/Category";
import Product from "./components/Product";
import Navi from "./components/Navi";
import BasketDetails from "./components/BasketDetails";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertify.js";

export default class App extends Component {
  state = {
    currentCat: [],
    products: [],
    cart: [],
  };

  changeCatName = (category) => {
    this.setState({ currentCat: category });
    this.getProducts(category.id);
  };

  /** Fetch Products */
  getProducts = (CatId) => {
    let url = "http://localhost:3000/products";
    if (CatId) {
      url += "?categoryId=" + CatId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  };

  /** Sepete Ekleme Operasyonu */
  addToCart = (product) => {
    let newCart = this.state.cart;

    /** Aynı ürün sepette var ise Adet arttırma operasyonu */
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
      alertify.success(product.productName + " Quntity Increesed!");
    } else {
      newCart.push({ product: product, quantity: 1 });
      alertify.success(product.productName + " Added!", 1);
    }

    this.setState({ cart: newCart });
  };

  /** Sepetten Ürün Silme Operasyonu */
  removeFromCart = (productID) => {
    let newCart = this.state.cart.filter(
      (c) => c.product.id !== productID.product.id
    );
    this.setState({ cart: newCart });
    alertify.error(productID.product.productName + " Deleted!", 1);
  };
  /** Sepeti temizleme operasyonu */
  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  /**Komponent Yüklendi */
  componentDidMount() {
    this.getProducts();
  }

  render() {
    let catTitle = "Kategoriler";
    return (
      <Container>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Row>
          <Col xs="3">
            <Col>
              <Category
                currentCategory={this.state.currentCat.categoryName}
                changeCategory={this.changeCatName}
                title={catTitle}
              />
            </Col>
            <Col className="mt-3">
              <BasketDetails
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
                removeAllFromCart={this.removeAllFromCart}
              />
            </Col>
          </Col>
          <Col xs="9">
            {this.state.currentCat.length !== 0 ? (
              <Product
                products={this.state.products}
                currentCategory={this.state.currentCat}
                addToCart={this.addToCart}
              />
            ) : (
              <h3>Kategori seçilmedi!</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
