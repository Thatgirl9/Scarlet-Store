import Discount from "@/components/discount";
import Featured from "@/components/featured";
import Search from "@/components/search";
import { useState } from "react";

const ProductsListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="text-black mt-[8em] md:px-14 px-6">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="mt-[2em]">
        <Featured searchQuery={searchQuery} />
        <Discount searchQuery={searchQuery} />
      </div>
    </main>
  );
};

export default ProductsListing;
