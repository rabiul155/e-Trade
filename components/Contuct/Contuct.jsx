import Image from "next/image";
import contuct from "../../public/Images/contuct.png";
import { HiMail, HiMailOpen } from "react-icons/hi";

function Contuct() {
  return (
    <div className="bg-[#5aa2ddd2] grid grid-cols-1 lg:grid-cols-2 ">
      <div className="py-6 lg:py-[76px] px-12 order-last lg:order-first">
        <div className=" flex justify-start items-center">
          <HiMailOpen className="text-gray-800" size={30}></HiMailOpen>
          <h5 className=" text-lg font-bold mx-5">Get Notification</h5>
        </div>
        <h2 className="mt-6 mb-8 text-3xl lg:text-5xl font-bold">
          Get weekly update
        </h2>
        <div className=" relative">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="h-14 px-14 w-full rounded-md  text-gray-900"
          />
          <HiMail
            className="absolute top-[14px] left-4 text-gray-600"
            size={26}
          ></HiMail>
          <button className="lg:absolute mt-6 lg:mt-0 top-0 -right-40 px-8 py-4 bg-black text-white rounded-md font-semibold">
            Subscribe
          </button>
        </div>
      </div>
      <Image src={contuct}></Image>
    </div>
  );
}

export default Contuct;
