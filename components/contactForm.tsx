import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      className="font-fontRaleway text-black-primary w-[93%]"
      onSubmit={handleSubmit}
    >
      {/* Customer Information */}
      <div>
        <h1 className="font-bold text-2xl font-fontInter">
          Customer Information
        </h1>

        <div className="mt-[1.3em] mb-[2em] font-fontInter">
          <label htmlFor="email" className=" font-medium text-">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full p-3 font-medium border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
          />
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mb-[2em]">
        <h1 className="font-bold text-2xl font-fontInter">
          Shipping Information
        </h1>

        <div className="font-fontInter mt-[1.3em] flex items-center gap-[1.3em] font-medium ">
          <div>
            <label htmlFor="name">First Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your first name"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
            />
          </div>

          <div>
            <label htmlFor="address">Last Name</label>
            <input
              name="address"
              type="text"
              placeholder="Your last name"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
            />
          </div>
        </div>

        <div className="font-fontInter mt-[1.3em] flex flex-col gap-2">
          <label htmlFor="tel" className="font-medium ">
            Phone Number
          </label>
          {/* <PhoneInput /> */}
          <PhoneInput
            country={"ng"}
            value={phone}
            onChange={setPhone}
            enableSearch={false}
            inputStyle={{
              width: "100%",
              height: "3em",
              fontSize: "16px",
              borderRadius: "0.4em",
              border: "1px solid #ccc",
              paddingLeft: "4em",
            }}
            buttonStyle={{
              borderRadius: "0.4em 0 0 0.4em",
              padding: "0 0.4em 0 0.4em",
            }}
          />
        </div>

        <div className="flex items-center mt-[1.3em] gap-[1.3em] font-fontInter">
          <div className="font-medium">
            <label htmlFor="country">Country</label>
            <input
              name="country"
              type="text"
              placeholder="Your country"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              name="city"
              type="text"
              placeholder="Your city"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
            />
          </div>
        </div>

        <div className="mt-[1.3em] font-fontInter">
          <label htmlFor="address" className="font-medium mt-[1.3em]">
            Address
          </label>
          <input
            name="address"
            type="text"
            placeholder="Your address"
            className="w-full p-3 font-medium border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
          />
        </div>
      </div>

      {/*Payment Information  */}
      <div className="mb-[2em]">
        <div>
          <h1 className="font-bold text-2xl font-fontInter">
            Payment Information
          </h1>
          <p className="text-gray-primary font-fontLato text-base mt-[0.4em]">
            Enter your Visa or Mastercard details
          </p>
        </div>

        <div className="mt-[1.5em] font-fontInter">
          <label htmlFor="cardName">Cardholder’s Name</label>
          <input
            name="cardName"
            type="text"
            placeholder="Enter the name on the card"
            className="w-full p-3 font-medium border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
          />
        </div>

        <div className="mt-[1.3em] font-fontInter">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            name="cardNumber"
            type="number"
            placeholder="1234 5678 9123"
            className="w-full p-3 font-medium border border-gray-text rounded-[0.4em] mt-1 font-fontLato"
          />
        </div>

        <div className="font-fontInter mt-[1.3em] flex items-center gap-[1.3em] font-medium ">
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              name="cvv"
              type="number"
              placeholder="123"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1"
            />
          </div>

          <div>
            <label htmlFor="date">Expiry Date</label>
            <input
              name="date"
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-text rounded-[0.4em] mt-1"
            />
          </div>
        </div>
      </div>

      <div className="mt-[3.5em] mb-[3em]">
        <button className="bg-orange-primary w-full p-[0.7em] rounded-[0.4em] text-white-bg font-fontRaleway font-bold">
          Confirm Payment
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
