import Bodysuit from "@/public/assets/discount/image 12.png";
import Necked from "@/public/assets/discount/image 12 (1).png";
import CropTop from "@/public/assets/discount/image 12 (2).png";
import BodyCon from "@/public/assets/discount/image 13.png";
import Jeans from "@/public/assets/discount/image 12 (3).png";
import ConTop from "@/public/assets/discount/image 12 (4).png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import internal from "stream";
import { Product } from "@/types/Product";
import { useCart } from "@/context/cartContext";

interface DiscountProps {
  searchQuery: string;
}

const discountSales: Product[] = [
  {
    id: 10,
    image: Bodysuit,
    title: "Sleeveless Bodysuit",
    discount: false,
    soldOut: false,
    slashedPrice: "200,000",
    price: "139,000",
    buttonText: "Add to Cart",
  },

  {
    id: 11,
    image: Necked,
    title: "Halter-necked body con top",
    slashedPrice: "200,000",
    discount: false,
    soldOut: false,
    price: "139,000",
    buttonText: "Add to Cart",
  },

  {
    id: 12,
    image: CropTop,
    title: "Sleeveless Crop Top",
    slashedPrice: "5,500",
    discount: false,
    soldOut: false,
    price: "5,000",
    buttonText: "Add to Cart",
  },

  {
    id: 13,
    image: BodyCon,
    title: "Sleeveless Bodycon Top",
    slashedPrice: "200,000",
    discount: false,
    soldOut: false,
    price: "139,000",
    buttonText: "Add to Cart",
  },

  {
    id: 14,
    image: Jeans,
    title: "Washed Skinny Jeans",
    slashedPrice: "5,500",
    discount: false,
    soldOut: false,
    price: "5,000",
    buttonText: "Add to Cart",
  },

  {
    id: 15,
    image: ConTop,
    title: "Sleeveless Bodycon Top",
    slashedPrice: "200,000",
    discount: false,
    soldOut: false,
    price: "139,000",
    buttonText: "Add to Cart",
  },
];

const Discount: React.FC<DiscountProps> = ({ searchQuery }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const filteredProducts = discountSales.filter((product) => {
    return product.title?.toLowerCase().includes(searchQuery);
  });

  return (
    <section
      className={`${
        router.pathname === "/"
          ? "mt-[4em] md:px-14 px-6 w-full"
          : "mt-[0] md:px-0 px-0"
      } `}
    >
      <h1
        className={` 
      ${
        router.pathname === "/"
          ? "font-fontInter text-2xl font-extrabold uppercase text-black-primary"
          : "hidden"
      } `}
      >
        30% DISCOUNT DEALS
      </h1>

      <div>
        <div className="grid grid-cols-3 gap-[2.5em]  mt-[2.4em]">
          {router.pathname === "/"
            ? discountSales.map((sale) => (
                <div key={sale.id} className="flex flex-col ">
                  <Image src={sale.image} alt={sale.title} />

                  <div className="flex flex-col mt-[1em] gap-1">
                    <h3 className="text-black-primary font-bold text-2xl font-fontRaleway">
                      {sale.title}
                    </h3>
                    <p className="text-gray-primary font-fontLato text-base line-through decoration-orange-primary">
                      &#8358;{sale.slashedPrice}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-black-secondary font-fontInter text-xl font-bold">
                        &#8358;{sale.price}
                      </p>
                      <button
                        className="bg-orange-primary text-white-bg font-semibold py-2 px-3 rounded-[0.3em]"
                        onClick={() => addToCart(sale)}
                      >
                        {sale.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : filteredProducts.map((sale) => (
                <div key={sale.id} className="flex flex-col ">
                  <Image src={sale.image} alt={sale.title} />

                  <div className="flex flex-col mt-[1em] gap-1">
                    <h3 className="text-black-primary font-bold text-2xl font-fontRaleway">
                      {sale.title}
                    </h3>
                    <p className="text-gray-primary font-fontLato text-base line-through decoration-orange-primary">
                      &#8358;{sale.slashedPrice}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-black-secondary font-fontInter text-xl font-bold">
                        &#8358;{sale.price}
                      </p>
                      <button
                        className="bg-orange-primary text-white-bg font-semibold py-2 px-3 rounded-[0.3em]"
                        onClick={() => addToCart(sale)}
                      >
                        {sale.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div
        className={` ${
          router.pathname === "/"
            ? "mt-[2.5em] flex justify-center items-center"
            : "hidden"
        } `}
      >
        <button className="border border-gray-primary p-2 px-3 rounded-[0.2em] font-semibold text-black-primary">
          <Link href="/productsListing">See More</Link>
        </button>
      </div>
    </section>
  );
};

export default Discount;
