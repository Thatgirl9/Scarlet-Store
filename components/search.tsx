import SearchIcon from "@/public/assets/icons/search-normal.svg";
import Image from "next/image";
const Search = () => {
  return (
    <div>
      <div className="border border-gray-secondary flex gap-2 items-center w-[23em] p-[0.6em] rounded-[0.5em] text-black-primary">
        <span>
          <Image src={SearchIcon} alt="A Search Icon" />
        </span>
        <input
          placeholder="Search"
          className="text-black-primary placeholder:text-black-primary text-lg outline-none w-full"
        />
      </div>
    </div>
  );
};

export default Search;
