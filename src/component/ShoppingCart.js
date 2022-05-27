// import { Toast } from "bootstrap";
import React from "react";

export default class ShoppingCart extends React.Component {
  render() {
    const { cartItems,removeShoppingCart} = this.props;
    
    const TotalItem=cartItems.reduce((accum,value)=>{
      return (value.count*value.price+accum)
    },0)
    return (
      <div className="shoppingcart">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="Name">{item.name}</div>
            <div>
              {item.count} x Rs.{item.price}={item.count*item.price}
            <button className="removeShoppingCart" onClick={()=>removeShoppingCart(item) }>-</button>   
            </div>
            
          </div>
        ))}
        <div className="Total">
        <h1>Total price: {TotalItem} </h1>

        </div>
      </div>
   
      
    );
  }
}
