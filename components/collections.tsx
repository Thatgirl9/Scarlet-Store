import BodyCons from "@/public/images/unsplash_h5cd51KXmRQ.png";
import CropTops from "@/public/images/unsplash_MYbhN8KaaEc.png";
import Trousers from "@/public/images/unsplash_wINNAh0IeCg.png";
import Image from "next/image";
const Collections: React.FC = () => {
  return (
    <main className="mt-[1em] md:px-14 px-6">
      <h1 className="font-fontInter text-2xl font-bold uppercase text-black-primary">
        Collections
      </h1>

      <div className="grid grid-cols-2 mt-[2em]">
        <div>
          <Image src={BodyCons} />
        </div>
      </div>
    </main>
  );
};

export default Collections;
