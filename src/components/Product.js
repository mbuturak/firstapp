import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { BsCartCheck } from "react-icons/bs";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.currentCategory.categoryName}</h3>
        <hr />

        <Table hover size="sm" responsive striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Per / Unit</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.categoryId}</td>
                <td>{prod.productName}</td>
                <td>{prod.quantityPerUnit}</td>
                <td>{prod.unitPrice}</td>
                <td>{prod.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(prod)}
                    outline
                    color="success"
                  >
                    <BsCartCheck size="1.6em" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
