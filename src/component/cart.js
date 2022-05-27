


import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  render() {
    const {cartItem} = this.props;
    return (
      <div className="subbox1">
        <div>count {cartItem.length}</div>
        <div className="card1">cart</div>
        <div className="card2">
        <table>
            {cartItem.map((item) => (
              <tr>
                <button >
                {item.name + " " + item.price}
                </button>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;