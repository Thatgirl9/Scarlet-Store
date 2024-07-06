import CCut from "@/public/assets/featured/image 12 (5).png";
import Bodysuit from "@/public/assets/discount/image 12.png";
import CropTop from "@/public/assets/discount/image 12 (2).png";
import BodyCon from "@/public/assets/featured/image 12 (6).png";
import BodyConWhite from "@/public/assets/discount/image 13.png";
import Jeans from "@/public/assets/discount/image 12 (3).png";
import Cargo from "@/public/assets/featured/image 12 (7).png";
import Jumper from "@/public/assets/featured/image 12 (8).png";
import ConTop from "@/public/assets/featured/image 12 (9).png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "@/context/cartContext";
import { Product } from "@/types/Product";

interface FeaturedProps {
  searchQuery: string;
}

const featured: Product[] = [
  {
    id: 1,
    image: CCut,
    title: "C-Cut Crop top",
    discount: false,
    price: "5,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 2,
    image: Bodysuit,
    title: "Sleeveless Bodycon Top",
    discount: false,
    price: "6,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 3,
    image: CropTop,
    title: "Sleeveless Crop Top",
    discount: true,
    slashedPrice: "5,500",
    price: "5,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 4,
    image: BodyCon,
    title: "Sleeveless Bodycon Top",
    discount: false,
    price: "6,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 5,
    image: BodyConWhite,
    title: "Sleeveless Bodycon Top",
    discount: false,
    price: "4,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 6,
    image: Jeans,
    title: "Sleeveless Bodycon Top",
    discount: true,
    slashedPrice: "5,500",
    price: "5,000",
    soldOut: true,
    buttonText: "Add to Cart",
  },

  {
    id: 7,
    image: Cargo,
    title: "Cargo Pants",
    discount: true,
    slashedPrice: "5,500",
    price: "4,000",
    soldOut: true,
    buttonText: "Add to Cart",
  },

  {
    id: 8,
    image: Jumper,
    title: "Gajio Jumper Pants",
    discount: false,
    price: "11,000",
    soldOut: false,
    buttonText: "Add to Cart",
  },

  {
    id: 9,
    image: ConTop,
    title: "Sleeveless Bodycon Top",
    discount: true,
    slashedPrice: "5,500",
    price: "5,000",
    soldOut: true,
    buttonText: "Add to Cart",
  },
];

const Featured: React.FC<FeaturedProps> = ({ searchQuery }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const filteredProducts = featured.filter((product) => {
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
        Featured
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5em]  mt-6 ">
        {router.pathname === "/"
          ? featured.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="relative">
                  <Image src={item.image} alt={item.title} />

                  {item.soldOut && (
                    <button className="absolute top-4 right-4 bg-black-secondary text-white-bg text-sm font-medium px-3 py-2 rounded-[0.5em] ">
                      Sold Out
                    </button>
                  )}
                </div>

                <h2 className="font-fontRaleway text-lg font-semibold mt-3">
                  {item.title}
                </h2>

                {/* <div className="flex items-center mt-2"> */}
                {item.discount && (
                  <p className="line-through decoration-orange-primary text-gray-primary text-sm my-1">
                    &#8358;{item.slashedPrice}
                  </p>
                )}

                {/* </div> */}
                <div
                  className={`flex justify-between items-center ${
                    item.discount ? "mt-0" : "mt-7"
                  }`}
                >
                  <p className="font-semibold text-black-primary text-lg font-fontInter">
                    &#8358;{item.price}
                  </p>

                  <button
                    className="bg-orange-primary text-white-bg text-sm font-semibold px-3 py-2 rounded-[0.3em]"
                    onClick={() => addToCart(item)}
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))
          : filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                <div className="relative">
                  <Image src={product.image} alt={product.title} />

                  {product.soldOut && (
                    <button className="absolute top-4 right-4 bg-black-secondary text-white-bg text-sm font-medium px-3 py-2 rounded-[0.5em] ">
                      Sold Out
                    </button>
                  )}
                </div>

                <h2 className="font-fontRaleway text-lg font-semibold mt-3">
                  {product.title}
                </h2>

                {product.discount && (
                  <p className="line-through decoration-orange-primary text-gray-primary text-sm my-1">
                    &#8358;{product.slashedPrice}
                  </p>
                )}

                <div
                  className={`flex justify-between items-center ${
                    product.discount ? "mt-0" : "mt-7"
                  }`}
                >
                  <p className="font-semibold text-black-primary text-lg font-fontInter">
                    &#8358;{product.price}
                  </p>

                  <button
                    className="bg-orange-primary text-white-bg text-sm font-semibold px-3 py-2 rounded-[0.3em]"
                    onClick={() => addToCart(product)}
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Featured;
