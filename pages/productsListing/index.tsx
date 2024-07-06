import Discount from "@/components/discount";
import Featured from "@/components/featured";
import Search from "@/components/search";

const ProductsListing = () => {
  return (
    <main className="text-black mt-[8em] md:px-14 px-6">
      <Search />
      <div className="mt-[2em]">
        <Featured />
        <Discount />
      </div>
    </main>
  );
};

export default ProductsListing;
