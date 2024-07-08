import Link from "next/link";
import { useRouter } from "next/router";

const ProductsNav: React.FC = () => {
  const router = useRouter();
  return (
    <nav>
      <ul
        className={`flex gap-2 font-fontLato font-medium text-base items-center
      
        `}
      >
        <li>
          <Link
            href="/productsListing"
            className={` ${
              router.pathname === "/carts"
                ? "text-black-primary no-underline underline-offset-4 decoration-0 hover:underline "
                : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <span className="text-gray-primary w-5 h-5 flex items-center justify-center">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </li>

        <li>
          <Link
            href="/carts"
            className={` ${
              router.pathname === "/carts"
                ? "text-orange-primary underline decoration-orange-primary underline-offset-4"
                : "text-black-primary "
            } `}
          >
            Carts
          </Link>
        </li>

        {router.pathname === "/carts/checkout" ? (
          <>
            <li>
              <span className="text-gray-primary w-5 h-5 flex items-center justify-center">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </li>

            <li>
              <Link
                href="/carts/checkout"
                className="text-orange-primary underline underline-offset-4 decoration-orange-primary"
              >
                Checkout
              </Link>
            </li>
          </>
        ) : (
          <li className="hidden"></li>
        )}
      </ul>
    </nav>
  );
};

export default ProductsNav;
