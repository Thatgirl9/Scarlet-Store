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

const Featured: React.FC = () => {
  const featured = [
    {
      image: CCut,
      title: "C-Cut Crop top",
      discount: false,
      price: "5,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: Bodysuit,
      title: "Sleeveless Bodycon Top",
      discount: false,
      price: "6,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: CropTop,
      title: "Sleeveless Crop Top",
      discount: true,
      slashedPrice: "5,500",
      price: "5,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: BodyCon,
      title: "Sleeveless Bodycon Top",
      discount: false,
      price: "6,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: BodyConWhite,
      title: "Sleeveless Bodycon Top",
      discount: false,
      price: "4,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: Jeans,
      title: "Sleeveless Bodycon Top",
      discount: true,
      slashedPrice: "5,500",
      price: "5,000",
      soldOut: true,
      buttonText: "Add to Cart",
    },

    {
      image: Cargo,
      title: "Cargo Pants",
      discount: true,
      slashedPrice: "5,500",
      price: "4,000",
      soldOut: true,
      buttonText: "Add to Cart",
    },

    {
      image: Jumper,
      title: "Gajio Jumper Pants",
      discount: false,
      price: "11,000",
      soldOut: false,
      buttonText: "Add to Cart",
    },

    {
      image: ConTop,
      title: "Sleeveless Bodycon Top",
      discount: true,
      slashedPrice: "5,500",
      price: "5,000",
      soldOut: true,
      buttonText: "Add to Cart",
    },
  ];

  return (
    <section className="mt-[3.3em] md:px-14 px-6">
      <h1 className="font-fontInter text-2xl font-extrabold uppercase text-black-primary">
        Featured
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5em]  mt-6">
        {featured.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <Image src={item.image} alt={item.title} />

              {item.soldOut && (
                <button className="absolute top-4 right-4 bg-black-secondary text-white-bg text-sm font-medium px-3 py-2 rounded-[0.5em] ">
                  Sold Out
                </button>
              )}
            </div>

            <h2 className="font-fontInter text-lg font-semibold mt-3">
              {item.title}
            </h2>

            {/* <div className="flex items-center mt-2"> */}
            {item.discount && (
              <p className="line-through text-gray-primary text-sm my-1">
                {item.slashedPrice}
              </p>
            )}

            {/* </div> */}
            <div
              className={`flex justify-between items-center ${
                item.discount ? "mt-0" : "mt-7"
              }`}
            >
              <p className="font-semibold text-black-primary text-lg">
                {item.price}
              </p>

              <button className="bg-orange-primary text-white-bg text-sm font-semibold px-3 py-2 rounded-[0.3em]">
                <Link href="/cart">{item.buttonText}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
