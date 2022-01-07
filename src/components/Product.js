import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Product extends Component {
  state = {
    products: [],
  };

  /** Kategori Güncellendiğinde */
  componentDidUpdate() {
    this.getProductList();
  }

  getProductList() {
    setTimeout(() => {
      fetch(
        "http://localhost:3000/products?categoryId=" +
          this.props.currentCategory.id
      )
        .then((res) => res.json())
        .then((data) => this.setState({ products: data }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>{this.props.currentCategory.categoryName}</h3>
        <hr />

        <Table hover className="tablo" responsive size="sm" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Per / Unit</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((prod) => (
              <tr key={prod.id}>
                <th scope="row">{prod.categoryId}</th>
                <td>{prod.productName}</td>
                <td>{prod.quantityPerUnit}</td>
                <td>{prod.unitPrice}</td>
                <td>{prod.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
