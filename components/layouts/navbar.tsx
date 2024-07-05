import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopIcon from "../../public/assets/icons/bx_bx-desktop.png";
import MobileIcon from "../../public/assets/icons/clarity_mobile-solid.png";
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
          <div className="flex items-center text-black-primary">
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
            <Link href="/testing" className="no-underline hover:underline">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6307 16.4508H7.67363L8.37441 15.0234L20.0182 15.0023C20.4119 15.0023 20.7494 14.7211 20.8197 14.332L22.4322 5.30625C22.4744 5.06953 22.4111 4.82578 22.2564 4.64062C22.18 4.5495 22.0846 4.4761 21.977 4.42551C21.8693 4.37492 21.7519 4.34835 21.633 4.34766L6.8205 4.29844L6.69394 3.70312C6.61425 3.32344 6.27207 3.04688 5.88301 3.04688H2.26191C2.04249 3.04688 1.83205 3.13404 1.67689 3.2892C1.52174 3.44436 1.43457 3.65479 1.43457 3.87422C1.43457 4.09364 1.52174 4.30408 1.67689 4.45924C1.83205 4.6144 2.04249 4.70156 2.26191 4.70156H5.21269L5.76582 7.33125L7.12754 13.9242L5.37441 16.7859C5.28337 16.9088 5.22853 17.0547 5.21611 17.2071C5.20368 17.3596 5.23416 17.5124 5.3041 17.6484C5.44472 17.9273 5.72832 18.1031 6.04238 18.1031H7.51425C7.20047 18.5199 7.03098 19.0275 7.03144 19.5492C7.03144 20.8758 8.10957 21.9539 9.43613 21.9539C10.7627 21.9539 11.8408 20.8758 11.8408 19.5492C11.8408 19.0266 11.6674 18.518 11.358 18.1031H15.1338C14.82 18.5199 14.6505 19.0275 14.651 19.5492C14.651 20.8758 15.7291 21.9539 17.0557 21.9539C18.3822 21.9539 19.4603 20.8758 19.4603 19.5492C19.4603 19.0266 19.2869 18.518 18.9775 18.1031H21.633C22.0877 18.1031 22.4603 17.7328 22.4603 17.2758C22.459 17.0566 22.371 16.8468 22.2155 16.6923C22.0601 16.5377 21.8499 16.4509 21.6307 16.4508ZM7.16504 5.92969L20.6603 5.97422L19.3385 13.3758L8.73769 13.3945L7.16504 5.92969ZM9.43613 20.2898C9.02832 20.2898 8.6955 19.957 8.6955 19.5492C8.6955 19.1414 9.02832 18.8086 9.43613 18.8086C9.84394 18.8086 10.1768 19.1414 10.1768 19.5492C10.1768 19.7456 10.0987 19.934 9.95983 20.0729C9.82094 20.2118 9.63255 20.2898 9.43613 20.2898ZM17.0557 20.2898C16.6478 20.2898 16.315 19.957 16.315 19.5492C16.315 19.1414 16.6478 18.8086 17.0557 18.8086C17.4635 18.8086 17.7963 19.1414 17.7963 19.5492C17.7963 19.7456 17.7182 19.934 17.5794 20.0729C17.4405 20.2118 17.2521 20.2898 17.0557 20.2898Z"
                  fill={` ${
                    router.pathname === "/carts" ? "#D95F27" : "#929292"
                  }`}
                />
              </svg>
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
