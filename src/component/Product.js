import React from "react";

export default class Product extends React.Component {
  render() {
    const { product, onAdd } = this.props;
    return (
      <div className="product">
        <h3>{product.name}</h3>
        <div>Rs.{product.price}</div>
      <div>
          <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
      </div>
    );
  }
}
