import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [],
  };

  /** Fetch Categories */
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data }));
  };

  /**Komponent Yüklendi */
  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <hr />
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              action
              tag="button"
              active={
                this.props.currentCategory === category.categoryName
                  ? true
                  : false
              }
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
