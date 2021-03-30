import React, { useReducer } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

const Product = () => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.product];
      case "remove":
        const productIndex = state.findIndex(
          (item) => item.name === action.product.name
        );
        if (productIndex < 0) {
          return state;
        }
        const update = [...state];
        update.splice(productIndex, 1);
        return update;
      default:
        return state;
    }
  };

  const [cart, setCart] = useReducer(cartReducer, []);

  const getTotal = (cart) => {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);

    return total.toLocaleString(undefined, currencyOptions);
  };

  const addItem = (product) => {
    setCart({ product, type: "add" });
  };

  const removeItem = (product) => {
    setCart({ product, type: "remove" });
  };

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items</div>
      <div>Total: {getTotal(cart)}</div>
      <div>
        {products.map((product) => (
          <div className="product" key={product.name}>
            <span role="img" aria-label={product.name}>
              {product.emoji}
            </span>
            <button onClick={() => addItem(product)}>Add</button>{" "}
            <button onClick={() => removeItem(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
