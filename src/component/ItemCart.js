import React from "react";
import Product from "./Product";


export default class ItemCart extends React.Component {
  render() {
    const { items, addToCart } = this.props;
    console.log({ items });
    return (
      <div>
        <div className="products">
          <h1>Products</h1>
          <div className="items">
            {items.map((item) => (
              <Product key={item.id} product={item} onAdd={addToCart} />
            ))}

            
            
          </div>
        
        </div>
      </div>
    );
  }
  
}

