import { createContext, ReactNode, useContext, useState } from "react";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  image: StaticImageData | string;
  title: string;
  discount: boolean;
  price: string;
  soldOut: boolean;
  buttonText: string;
  slashedPrice?: string;
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: (item.quantity || 1) + 1,
            };
          }
          return item;
        });
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity || 1) + 1,
          };
        }
        return product;
      })
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: Math.max((product.quantity || 1) - 1, 0),
            };
          }
          return product;
        })
        .filter((product) => product.quantity !== 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
