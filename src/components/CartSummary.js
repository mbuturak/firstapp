import React, { Component } from "react";
import {
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { FiTrash2 } from "react-icons/fi";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            {this.props.cart.length !== 0 ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sepet
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.cart.map((cartItem) => (
                    <DropdownItem key={cartItem.product.id}>
                      {cartItem.product.productName}
                      <Badge color="success">x{cartItem.quantity}</Badge>
                      &nbsp;
                      <Badge
                        onClick={() => this.props.removeFromCart(cartItem)}
                        color="danger"
                      >
                        <FiTrash2 />
                      </Badge>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              ""
            )}
          </Nav>
        </Collapse>
      </div>
    );
  }
}
