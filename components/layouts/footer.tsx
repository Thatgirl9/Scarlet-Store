import Twitter from "@/public/assets/footer/twitter.svg";
import LinkedIn from "@/public/assets/footer/linkedin.svg";
import Facebook from "@/public/assets/footer/facebook (1).svg";
import Instagram from "@/public/assets/footer/instagram.svg";
import Email from "@/public/assets/footer/sms.svg";
import Call from "@/public/assets/footer/call.svg";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com",
      image: Twitter,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      image: LinkedIn,
    },
    {
      name: "Facebook",
      link: "https://facebook.com",
      image: Facebook,
    },

    {
      name: "Instagram",
      link: "https://instagram.com",
      image: Instagram,
    },
  ];

  const contact = [
    {
      image: Email,
      text: "info@lilarit.com",
    },

    {
      image: Call,
      text: "+2348123854390",
    },
  ];

  return (
    <footer className="bg-orange-bg mt-[7em] md:px-14 md:py-14 px-6 text-white-bg w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-3xl font-fontRaleway mb-2">
            The Scarlet Store
          </h1>
          <p className="w-[25ch] font-fontLato font-medium text-gray-text">
            The scarlet store is your one stop shop for classic ladies wears
            like crop tops, bodycon tops and trousers.{" "}
          </p>

          <div className="flex gap-3 mt-6">
            {socials.map((social, index) => {
              return (
                <Link key={index} href={social.link}>
                  <Image src={social.image} alt="Social Media Icon" />
                  {/* Add your desired content here */}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-3xl font-fontRaleway mb-2">Reach us</h1>

          <div className="flex flex-col gap-4 mt-4 pr-5">
            {contact.map((item, index) => {
              return (
                <div key={index} className="font-fontLato flex gap-3">
                  <span>
                    <Image src={item.image} alt="Contact Icon" />
                  </span>
                  <span>
                    <p>{item.text}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
