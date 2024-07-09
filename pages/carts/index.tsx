import ProductsNav from "@/components/productsNav";
import { useCart } from "@/context/cartContext";
import Trash from "@/public/assets/icons/trash.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart: React.FC = () => {
  const {
    cart,

    clearCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  } = useCart();

  return (
    <main className="mt-[6em] md:px-14 px-5 w-full bg-white-bg min-h-[100vh]">
      <ProductsNav />

      {cart.length === 0 ? (
        <div className="mt-[4em] flex justify-center items-center p-[2em] font-fontRaleway">
          <div className="shadow-2xl flex items-center p-5">
            <h1 className="md:text-2xl text-xl font-bold text-orange-primary">
              Your cart is empty.
            </h1>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6307 16.4508H7.67363L8.37441 15.0234L20.0182 15.0023C20.4119 15.0023 20.7494 14.7211 20.8197 14.332L22.4322 5.30625C22.4744 5.06953 22.4111 4.82578 22.2564 4.64062C22.18 4.5495 22.0846 4.4761 21.977 4.42551C21.8693 4.37492 21.7519 4.34835 21.633 4.34766L6.8205 4.29844L6.69394 3.70312C6.61425 3.32344 6.27207 3.04688 5.88301 3.04688H2.26191C2.04249 3.04688 1.83205 3.13404 1.67689 3.2892C1.52174 3.44436 1.43457 3.65479 1.43457 3.87422C1.43457 4.09364 1.52174 4.30408 1.67689 4.45924C1.83205 4.6144 2.04249 4.70156 2.26191 4.70156H5.21269L5.76582 7.33125L7.12754 13.9242L5.37441 16.7859C5.28337 16.9088 5.22853 17.0547 5.21611 17.2071C5.20368 17.3596 5.23416 17.5124 5.3041 17.6484C5.44472 17.9273 5.72832 18.1031 6.04238 18.1031H7.51425C7.20047 18.5199 7.03098 19.0275 7.03144 19.5492C7.03144 20.8758 8.10957 21.9539 9.43613 21.9539C10.7627 21.9539 11.8408 20.8758 11.8408 19.5492C11.8408 19.0266 11.6674 18.518 11.358 18.1031H15.1338C14.82 18.5199 14.6505 19.0275 14.651 19.5492C14.651 20.8758 15.7291 21.9539 17.0557 21.9539C18.3822 21.9539 19.4603 20.8758 19.4603 19.5492C19.4603 19.0266 19.2869 18.518 18.9775 18.1031H21.633C22.0877 18.1031 22.4603 17.7328 22.4603 17.2758C22.459 17.0566 22.371 16.8468 22.2155 16.6923C22.0601 16.5377 21.8499 16.4509 21.6307 16.4508ZM7.16504 5.92969L20.6603 5.97422L19.3385 13.3758L8.73769 13.3945L7.16504 5.92969ZM9.43613 20.2898C9.02832 20.2898 8.6955 19.957 8.6955 19.5492C8.6955 19.1414 9.02832 18.8086 9.43613 18.8086C9.84394 18.8086 10.1768 19.1414 10.1768 19.5492C10.1768 19.7456 10.0987 19.934 9.95983 20.0729C9.82094 20.2118 9.63255 20.2898 9.43613 20.2898ZM17.0557 20.2898C16.6478 20.2898 16.315 19.957 16.315 19.5492C16.315 19.1414 16.6478 18.8086 17.0557 18.8086C17.4635 18.8086 17.7963 19.1414 17.7963 19.5492C17.7963 19.7456 17.7182 19.934 17.5794 20.0729C17.4405 20.2118 17.2521 20.2898 17.0557 20.2898Z"
                fill="#D95F27"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="md:border md:border-gray-text mt-[2em] rounded-[0.4em] shadow-none md:shadow-2xl md:p-[2em] ">
          <div className="flex md:justify-between md:items-center justify-end">
            <h1 className="font-fontRaleway font-semibold text-lg md:block hidden">
              {cart.length} item{cart.length > 1 && "s"} in Cart
            </h1>

            <div
              className="flex gap-2 items-center hover:cursor-pointer"
              onClick={() => clearCart()}
            >
              <span>
                <Image src={Trash} alt="Trash Icon" />
              </span>
              <h1 className="hidden md:block font-fontRaleway font-semibold text-lg text-orange-primary">
                Empty Cart
              </h1>
            </div>
          </div>
          {cart.map((product) => (
            <>
              <div
                key={product.id}
                className="flex lg:justify-between md:p-[1.4em] px-[0.5em] py-[0.8em] border-b border-gray-text items-center lg:gap-[0] gap-[1.3em] "
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="lg:w-[15em] lg:h-[16em] md:w-[10em] md:h-[11em] w-[7em] h-[8em]"
                />

                <h2 className="font-fontRaleway font-semibold text-xl hidden lg:block">
                  {product.title}
                </h2>

                <div className="lg:flex items-center gap-2 font-fontLato hidden ">
                  <p className="h-5 w-5 rounded-full bg-black"></p>

                  <select className="text-gray-primary font-medium">
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="white">White</option>
                  </select>
                </div>

                <div className="lg:flex items-center gap-2 font-fontLato hidden">
                  <p className="h-5 w-5 rounded-full bg-orange-secondary flex items-center justify-center text-center text-xs font-semibold text-orange-primary">
                    M
                  </p>

                  <select className="text-gray-primary font-medium">
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>

                    <option value="large">Large</option>
                  </select>
                </div>

                <p className="text-orange-primary font-fontLato font-semibold text-base hidden lg:flex">
                  &#8358;
                  {(parseFloat(product.price) * (product.quantity || 1))
                    .toFixed(3)
                    .replace(/\./g, ",")}
                </p>

                <div className="lg:flex items-center justify-center text-center hidden">
                  {/* Minus */}
                  <button
                    className="text-gray-tertiary bg-gray-text text-lg w-7 h-7"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    <ion-icon
                      name="remove-outline"
                      className="w-6 h-6"
                    ></ion-icon>
                  </button>
                  <p className="font-fontLato font-semibold text-lg bg-gray-bg w-9 h-7">
                    {product.quantity || 1}
                  </p>
                  {/* Add */}
                  <button
                    className="text-gray-tertiary bg-gray-text text-lg w-7 h-7"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>

                {/* Mobile + Tablet */}
                <div className="flex flex-col gap-[0.2em] md:gap-0 lg:hidden w-full">
                  <h2 className="font-fontRaleway font-semibold text-[14px] md:text-xl">
                    {product.title}
                  </h2>

                  <div className="flex items-center lg:hidden justify-between">
                    <div className="flex flex-col mt-1 gap-1 ">
                      <div className="flex items-center gap-1 font-fontLato">
                        <p className="h-4 w-4 rounded-full bg-black"></p>
                        <p className="text-gray-primary font-medium text-[14px] md:text-base lg:hidden block">
                          Black
                        </p>
                        <select className="text-gray-primary font-medium lg:block hidden">
                          <option value="black">Black</option>
                          <option value="yellow">Yellow</option>
                          <option value="blue">Blue</option>
                          <option value="white">White</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-1 font-fontLato">
                        <p className="h-4 w-4 rounded-full bg-orange-secondary flex items-center justify-center text-center text-xs font-semibold text-orange-primary">
                          M
                        </p>
                        <p className="text-gray-primary font-medium text-[14px] md:text-base lg:hidden block">
                          Medium
                        </p>
                        <select className="text-gray-primary font-medium lg:block hidden">
                          <option value="medium">Medium</option>
                          <option value="small">Small</option>

                          <option value="large">Large</option>
                        </select>
                      </div>

                      <p className="text-orange-primary font-fontLato font-semibold text-base">
                        &#8358;
                        {(parseFloat(product.price) * (product.quantity || 1))
                          .toFixed(3)
                          .replace(/\./g, ",")}
                      </p>
                    </div>

                    <div className="flex items-center justify-center text-center">
                      {/* Minus */}
                      <button
                        className="text-gray-tertiary bg-gray-text text-lg w-5 h-6 md:w-7 md:h-7"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        <ion-icon
                          name="remove-outline"
                          className="w-6 h-6"
                        ></ion-icon>
                      </button>
                      <p className="font-fontLato font-semibold text-lg bg-gray-bg w-7 h-6 md:w-9 md:h-7">
                        {product.quantity || 1}
                      </p>
                      {/* Add */}
                      <button
                        className="text-gray-tertiary bg-gray-text text-lg w-5 h-6 md:w-7 md:h-7"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Mobile + Tablet */}
              </div>
            </>
          ))}
          <div className="mt-[5em] flex items-center justify-between">
            <div className="text-black-primary font-fontInter">
              <h1 className="md:text-base text-sm font-bold ">Total Price</h1>
              <p className="md:text-3xl text-2xl font-extrabold ">
                &#8358;
                {totalPrice.toFixed(3).replace(/\./g, ",")}
              </p>
            </div>

            <div className="">
              <button className="bg-orange-primary text-white font-semibold text-base py-2 px-4 rounded-[0.4em]">
                <Link href="/carts/checkout">Go to Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
