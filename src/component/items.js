

import React, { Component } from "react";
import "./items.css";

class Item extends Component {
  render() {
    return (
      <div>
        <div className="subbox">
          <table>
            {this.props.shopingItem.map((item) => (
              <tr>
                <button onClick={() => this.props.addToCart(item)}>
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

export default Item;