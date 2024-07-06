import { useCart } from "@/context/cartContext";
import Image from "next/image";
import React from "react";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="mt-[7em]">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cart.map((product) => (
            <div key={product.id} className="border p-4">
              <Image src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-2 p-2 bg-red-500 text-white"
              >
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Cart;
