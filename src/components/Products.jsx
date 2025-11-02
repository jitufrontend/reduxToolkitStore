import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, clearCart } from "../app/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

  return (
    <div>
      <h1>shopping cart🛒</h1>
      {products.map((v, i) => (
        <div key={i} style={{ display: "flex" }}>
          <p>{v.name}</p>
          <p>{v.price}</p>
          <button onClick={() => dispatch(addToCart(v))}>Add to Cart</button>
        </div>
      ))}
      {cart.map((v, i) => (
        <div key={i} style={{ display: "flex" }}>
          <p>{v.name}</p>
          <p>{v.price}</p>
          <button onClick={()=> dispatch(removeCart(v.id))}>remove cart</button>
        </div>
      ))}
      <p>Total  {cart.length}</p>
      <p>Total Price  {totalPrice}</p>
      <button onClick={()=>dispatch(clearCart())}>clear cart</button>

    </div>
  );
};

export default Products;
