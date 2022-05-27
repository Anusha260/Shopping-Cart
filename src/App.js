

import "./App.css";
import ItemCart from "./component/ItemCart";
import ShoppingCart from "./component/ShoppingCart";


import data from "./data";
import React from "react"
// import mkmm


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
   
  }
  
  addToCart = (product) => {
    const { cartItems } = this.state;
    const isPresent = cartItems.find((item) => item.id === product.id);
    if (isPresent) {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...isPresent, count: isPresent.count + 1 }
            : item
        )
      });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, count: 1 }]
      });
    }
  }
  removeShoppingCart = (product) => {
    const { cartItems } = this.state;
    const isPresent = cartItems.find((item) => item.id === product.id);
    if (isPresent) {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...isPresent, count: isPresent.count - (isPresent.count ? 1 : 0) }
            : item
        )
      });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, count: 1 }]
      });
    }
  }
 
  reset = ()=>{
    this.setState({
      cartItems:[]
    })
  }
  buy=(props)=>{
    const {cartItems} = this.state
    console.log(cartItems);
    
    alert(JSON.stringify(this.state.cartItems))
  }

  render() {
    return (
      <div className="box">
        
        <ItemCart items={data.items} addToCart={this.addToCart} />
        <div className="shopping">
        <ShoppingCart cartItems={this.state.cartItems} removeShoppingCart={this.removeShoppingCart} />
        </div>
        
       <div className="set">
        <button  onClick={this.reset}>Reset</button>
        
        </div>
        <div className="buy">
        <button onClick={this.buy} disabled={this.state.cartItems.length==0}>buy</button>
        </div>
  
      </div>
    );
  }
}


