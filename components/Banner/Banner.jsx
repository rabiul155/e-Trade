import Image from "next/image";
import img from "../../public/Images/banner.png";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <div className="bg-sky-100 p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
      <div className="">
        <Image className="h-full w-full" src={img}></Image>
      </div>
      <div>
        <h4 className=" font-bold text-xl md:text-3xl text-gray-700 mt-3 mb-4">
          In this season, Find the best
        </h4>
        <h1 className="font-extrabold text-gray-800 text-3xl md:text-7xl">
          Exclusive collection for everyone
        </h1>
        <button className="mt-6 px-4 lg:px-6 py-2 lg:py-4 bg-black text-white text-sm lg:text-xl rounded-full font-semibold">
          Explore Now
          <FaArrowRight className="font-bold inline-block ml-2 "></FaArrowRight>
        </button>
      </div>
    </div>
  );
}

export default Banner;
