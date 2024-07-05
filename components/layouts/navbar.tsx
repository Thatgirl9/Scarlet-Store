import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "../../public/icons/ant-design_shopping-cart-outlined.png";
import DesktopIcon from "../../public/icons/bx_bx-desktop.png";
import MobileIcon from "../../public/icons/clarity_mobile-solid.png";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const routes = [
    {
      name: "Home",
      link: "/",
    },

    { name: "Products", link: "/testing" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <header
      className={`bg-white-bg w-full md:px-14 px-6 py-5 lg:py-6 lg:pb-7 z-50 fixed top-0 left-0 right-0
 `}
    >
      {/* Second header */}
      <nav
        className={`md:flex md:justify-between md:items-center  ${
          router.pathname === "/"
            ? "lg:border lg:border-gray-border"
            : "border-none "
        }`}
      >
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-3xl">
              The Scarlet Store
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-4xl text-black md:hidden bg-transparent border-none"
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-black"
            ></ion-icon>
          </button>
        </div>

        {/* Links */}

        <div
          className={`links h-0 overflow-hidden transition-all md:flex md:h-auto bg-white-bg  md:bg-transparent absolute top-[4em] right-0 md:relative md:top-0 md:right-0 md:border-none  md:rounded-none ease-in-out z-50 nav__div flex flex-col md:flex-row md:gap-6  px-5 py-8  md:mx-0 md:p-0
        ${
          open
            ? "h-[100vh] md:w-fit w-[60%] right-0"
            : "h-0 w-0 md:w-fit right-[-10em] "
        }`}
        >
          <ul className="flex md:flex-row md:gap-6 font-medium gap-[1.4em] justify-end md:justify-normal md:items-center items-end flex-col  md:border-none list-none pb-[1em] md:pb-0">
            {routes.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={` text-gray-primary text-lg  transition-all ease-in-out no-underline hover:underline
                    ${
                      router.pathname === link.link
                        ? "text-orange-primary"
                        : "text-gray-primary"
                    }`}
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link href="/carts">
              <Image
                src={Cart}
                alt="A Shopping Cart Icon"
                width="24"
                height="24"
              />
            </Link>
          </ul>

          <div className="flex md:hidden gap-[1.2em] md:gap-4 justify-end items-end md:justify-normal md:items-center">
            <div>
              <Image
                src={DesktopIcon}
                alt="A Desktop Icon"
                width="24"
                height="24"
              />
            </div>
            <div>
              <Image
                src={MobileIcon}
                alt="A Mobile Phone Icon"
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>

        {/* Desktop Icons-Show, Mobile-Hidden */}
        <div className="md:flex hidden md:flex-row flex-col gap-[1.2em] md:gap-4 justify-end items-end md:justify-normal md:items-center">
          <div>
            <Image
              src={DesktopIcon}
              alt="A Desktop Icon"
              width="24"
              height="24"
            />
          </div>
          <div>
            <Image
              src={MobileIcon}
              alt="A Mobile Phone Icon"
              width="24"
              height="24"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
