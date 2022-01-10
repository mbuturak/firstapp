import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import { FiTrash2 } from "react-icons/fi";
import alertify from "alertify.js";

export default class BasketDetails extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.cart.map((cartItem) => (
            <ListGroupItem key={cartItem.product.id}>
              {cartItem.product.productName}&nbsp;
              <Badge style={{ clear: "both" }} color="success">
                x{cartItem.quantity}
              </Badge>
              &nbsp;
              <Badge
                onClick={() => this.props.removeFromCart(cartItem)}
                color="danger"
                className="float-right"
              >
                <FiTrash2 />
              </Badge>
            </ListGroupItem>
          ))}
          {this.props.cart.length >= "5" ? (
            <ListGroupItem>
              <Button
                color="danger"
                onClick={() =>
                  alertify.confirm(
                    "Sepeti boşaltmak istediğinizden emin misiniz?",
                    () => {
                      this.props.removeAllFromCart();
                      alertify.success("Sepet temizlendi.");
                    }
                  )
                }
              >
                Sepeti Temizle
              </Button>
            </ListGroupItem>
          ) : (
            ""
          )}
        </ListGroup>
      </div>
    );
  }
}
