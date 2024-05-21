import { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
  }
  const handleAddToCart = (selectedProduct) => {
    if (quantity < 4) {
      let newCart = [];
      let addedProduct = cart.find(
        (product) => product.id === selectedProduct.id
      );
      if (addedProduct) {
        addedProduct = { ...addedProduct, quantity: addedProduct.quantity + 1 };
        newCart = cart.map((product) =>
          product.id === selectedProduct.id ? addedProduct : product
        );
      } else {
        addedProduct = { ...selectedProduct, quantity: 1 };
        newCart = [...cart, addedProduct];
      }
      setCart(newCart);
    } else {
      alert("You can't select more than 4 items!!!!");
    }
  };

  const removeAllFromCart = () => {
    const newCart = [];
    setCart(newCart);
  };
  const chooseOne = () => {
    if (cart.length <= 1) return;

    const randomIndex = Math.floor(Math.random() * cart.length);
    const chosenProduct = cart[randomIndex];

    setCart([...[chosenProduct]]);
  };

  return (
    <div className="relative">
      <Cart
        cart={cart}
        removeAllFromCart={removeAllFromCart}
        chooseOne={chooseOne}
      ></Cart>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
