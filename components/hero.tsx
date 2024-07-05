// import "./components.css";

const Hero: React.FC = () => {
  return (
    <div className="clothes-bg w-full flex items-center justify-start md:px-14 px-6 text-white-bg">
      <div className="flex flex-col gap-2">
        <p className="font-fontLato text-gray-text font-medium text-lg">
          Explore trendy outfits
        </p>
        <h1 className="text-7xl font-bold">Mid year mega sales</h1>
        <p className="font-fontLato text-gray-text font-medium text-lg">
          Get up to 30% discounts on tops
        </p>
      </div>
    </div>
  );
};

export default Hero;
