import Bodysuit from "@/public/assets/discount/image 12.png";
import Necked from "@/public/assets/discount/image 12 (1).png";
import CropTop from "@/public/assets/discount/image 12 (2).png";
import BodyCon from "@/public/assets/discount/image 13.png";
import Jeans from "@/public/assets/discount/image 12 (3).png";
import ConTop from "@/public/assets/discount/image 12 (4).png";
import Image from "next/image";
import Link from "next/link";

const Discount: React.FC = () => {
  const discountSales = [
    {
      image: Bodysuit,
      title: "Sleeveless Bodysuit",
      slashedPrice: "200,000",
      price: "139,000",
      buttonText: "Add to Cart",
    },

    {
      image: Necked,
      title: "Halter-necked body con top",
      slashedPrice: "200,000",
      price: "139,000",
      buttonText: "Add to Cart",
    },

    {
      image: CropTop,
      title: "Sleeveless Crop Top",
      slashedPrice: "5,500",
      price: "5,000",
      buttonText: "Add to Cart",
    },

    {
      image: BodyCon,
      title: "Sleeveless Bodycon Top",
      slashedPrice: "200,000",
      price: "139,000",
      buttonText: "Add to Cart",
    },

    {
      image: Jeans,
      title: "Washed Skinny Jeans",
      slashedPrice: "5,500",
      price: "5,000",
      buttonText: "Add to Cart",
    },

    {
      image: ConTop,
      title: "Sleeveless Bodycon Top",
      slashedPrice: "200,000",
      price: "139,000",
      buttonText: "Add to Cart",
    },
  ];

  return (
    <section className="mt-[3em] md:px-14 px-6">
      <h1 className="font-fontInter text-2xl font-extrabold uppercase text-black-primary">
        30% DISCOUNT DEALS
      </h1>

      <div>
        <div className="grid grid-cols-3 gap-[2.5em]  mt-[2.4em]">
          {discountSales.map((sale, index) => (
            <div key={index} className="flex flex-col ">
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
                  <button className="bg-orange-primary text-white-bg font-semibold py-2 px-3 rounded-[0.3em]">
                    <Link href="/cart">{sale.buttonText}</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[2.5em] flex justify-center items-center ">
        <button className="border border-gray-primary p-2 px-3 rounded-[0.2em] font-semibold text-black-primary">
          <Link href="/products">See More</Link>
        </button>
      </div>
    </section>
  );
};

export default Discount;
