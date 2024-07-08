import ContactForm from "@/components/contactForm";
import ProductsNav from "@/components/productsNav";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

const Checkout = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, product) =>
      total + parseFloat(product.price) * (product.quantity || 0),
    0
  );

  const additionalCost = "4,000";

  const additionalCostNumber = parseFloat(additionalCost.replace(/,/g, ""));

  const newPrice = totalPrice + +additionalCostNumber;

  // const formatCurrency = (value: number) =>
  //   value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <main className="mt-[6em] md:px-14 px-6 w-full min-h-[100vh]">
      <ProductsNav />

      <section className="mt-[2em] flex justify-between">
        <div className="contact-checkout mt-[1em] w-[50%] h-[60vh] overflow-scroll overflow-x-auto">
          <ContactForm />
        </div>

        {cart.length === 0 ? (
          <div className="hidden"></div>
        ) : (
          <div className="border border-gray-text mt-[1em] p-[1.4em] rounded-[0.4em] shadow-2xl h-full">
            {cart.map((product) => (
              <>
                <div
                  key={product.id}
                  className="flex border-b py-[1em] border-gray-text items-center gap-[1em]"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-[9em] h-[10em]"
                  />

                  <div className="flex flex-col gap-2">
                    <h2 className="font-fontRaleway font-semibold text-xl">
                      {product.title}
                    </h2>

                    <div className="flex items-center gap-2 font-fontLato">
                      <p className="h-5 w-5 rounded-full bg-black"></p>
                      <p className="text-gray-primary font-medium">Black</p>
                    </div>

                    <div className="flex items-center gap-2 font-fontLato">
                      <p className="h-5 w-5 rounded-full bg-orange-secondary flex items-center justify-center text-center text-xs font-semibold text-orange-primary">
                        M
                      </p>
                      <p className="text-gray-primary font-medium">Medium</p>
                    </div>

                    <p className="text-orange-primary font-fontLato font-semibold text-base">
                      &#8358;
                      {(parseFloat(product.price) * (product.quantity || 1))
                        .toFixed(3)
                        .replace(/\./g, ",")}
                    </p>
                  </div>
                </div>
              </>
            ))}

            <div className="mt-[2em] flex flex-col items-center justify-between gap-3">
              <div className="text-black-primary flex justify-between items-center w-full">
                <h1 className="text-base text-gray-primary font-fontLato">
                  Subtotal Price
                </h1>
                <p className="text-base font-bold font-fontRaleway">
                  &#8358;
                  {totalPrice.toFixed(3).replace(/\./g, ",")}
                  {/* {formatCurrency(totalPrice)} */}
                </p>
              </div>

              <div className="text-black-primary font-fontInter flex justify-between items-center w-full">
                <h1 className="text-base text-gray-primary font-fontLato">
                  Shipping Cost
                </h1>
                <p className="text-base font-bold font-fontRaleway">
                  &#8358;
                  {additionalCostNumber}
                  {/* {additionalCost.toFixed().replace(/\./g, ",")} */}
                  {/* {totalPrice.toFixed(3).replace(/\./g, ",")} */}
                </p>
              </div>

              <div className="text-black-primary font-fontInter flex justify-between items-center w-full">
                <h1 className="text-base text-gray-primary font-fontLato">
                  Total Price
                </h1>
                <p className="text-base font-bold font-fontRaleway">
                  &#8358; {newPrice}
                  {/* {newPrice.toFixed(3).replace(/\./g, ",")} */}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Checkout;
