import React from "react";
import logo from "../assets/logo.png";

interface DefaultWrapperProps {
  children: React.ReactNode;
}

const DefaultWrapper: React.FC<DefaultWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center h-20 mb-6 md:flex-row md:justify-between md:h-24">
        <div className="flex items-center -ml-40 md:ml-0 mt-16">
          <img src={logo} className="w-28 h-16 md:w-3/5 md:h-40  md:m-10 " alt="Logo" />
        </div>
        <p className="text-black font-bold text-lg md:text-xl mx-4 md:mx-10 my-2 md:my-0 underline rounded-md p-2 hover:border-2 hover:border-black">
          Contact Us
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-24 md:h-32">
        <p className="text-black text-3xl font-bold font-graphik">ABOUT US</p>
      </div>
      <p className="mx-4 md:mx-12 my-4 md:my-8 font-semibold capitalize font-graphik text-base md:text-lg">
        Founded in 2003, we at Paras Metallurgicals supply high-quality parts
        for concrete mixing, pumping, and batching plants. We offer a wide range
        of durable and reliable products to ensure the smooth operation of your
        equipment.
      </p>
      <div className="flex items-center justify-center w-full h-24 md:h-32">
        <p className="text-black text-3xl font-bold font-graphik">ENQUIRIES</p>
      </div>
      <div>{children}</div>
      <div className="flex items-center justify-center w-full h-24 md:h-32 bg-black text-white">
        <p className="text-lg md:text-xl">FOOTER</p>
      </div>
    </>
  );
};

export default DefaultWrapper;
