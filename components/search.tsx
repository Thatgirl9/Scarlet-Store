import SearchIcon from "@/public/assets/icons/search-normal.svg";
import Image from "next/image";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}
const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <div className="border border-gray-secondary flex gap-2 items-center w-[99%] md:w-[23em] p-[0.6em] rounded-[0.5em] text-black-primary">
        <span>
          <Image src={SearchIcon} alt="A Search Icon" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="text-black-primary placeholder:text-black-primary text-lg outline-none w-full"
        />
      </div>
    </div>
  );
};

export default Search;
