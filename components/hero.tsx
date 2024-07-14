const Hero: React.FC = () => {
  return (
    <div className=" clothes-bg w-full mt-[2em] min-h-[40dvh] md:min-h-[70vh] md:mt-0 xl:min-h-[100vh] 2xl:min-h-[50vh] xl:mt-0  flex items-center justify-start md:px-14 px-6 text-white-bg">
      <div className="flex flex-col gap-2">
        <p className="font-fontLato text-gray-text font-medium md:text-lg text-sm ">
          Explore trendy outfits
        </p>
        <h1 className="text-2xl md:text-7xl font-bold font-fontRaleway">
          Mid year mega sales
        </h1>
        <p className="font-fontLato text-gray-text font-medium text-sm md:text-lg">
          Get up to 30% discounts on tops
        </p>
      </div>
    </div>
  );
};

export default Hero;
