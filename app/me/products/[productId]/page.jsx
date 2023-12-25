"use client";
import APIKit from "@/common/helpers/APIKit";
import Loading from "@/components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { FaStar, FaRegHeart } from "react-icons/fa";

function page() {
  const params = useParams();

  const {
    data: product = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product/_id"],
    queryFn: async () => {
      const result = await APIKit.product.getSingleProduct(params.productId);
      return result.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <div>data fetching error</div>;
  }

  const { _id, img, name, price, category, shipping, stock, ratingsCount } =
    product;

  return (
    <div className="text-gray-700 grid grid-cols-1 lg:grid-cols-7 gap-6 m-6">
      <div className=" hidden lg:block">
        <div className=" mb-3 p-3 border ">
          <img src={img} alt="none" />
        </div>
        <div className=" mb-3 p-3 border ">
          <img src={img} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-2">
        <div className=" mb-3 p-4 border ">
          <img src={img} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-4">
        <h3 className=" font-bold text-lg">{name}</h3>
        <div className="mt-2 mb-4 flex items-center gap-[2px] ">
          <FaStar className=" text-yellow-400" size={12}></FaStar>
          <FaStar className=" text-yellow-400" size={12}></FaStar>
          <FaStar className=" text-yellow-400" size={12}></FaStar>
          <FaStar className=" text-yellow-400" size={12}></FaStar>

          <small className=" text-gray-500 mt-[2px] mx-1">{ratingsCount}</small>
        </div>
        <hr />
        <small className="my-4 inline-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          aliquam fuga necessitatibus eveniet, ipsa, accusamus natus, eum
          deleniti repudiandae voluptatum omnis? Eius et accusantium debitis
          cupiditate fuga eum repudiandae minus?
        </small>
        <hr />

        <h6 className="my-4 font-semibold text-lg">Price : {price} BDT</h6>
        <div className=" flex justify-start items-center gap-2">
          <small className=" font-semibold">Qunatity</small>
          <input
            className="w-12 text-gray-700 text-sm rounded py-[2px] pl-2 border "
            min="0"
            max="100"
            defaultValue={1}
            type="number"
          />
          <button className="hover:bg-sky-600 duration-300 px-2 py-1 bg-slate-700 text-white rounded-md text-[12px]">
            Add To Cart
          </button>
          <button className="hover:bg-sky-600 duration-300 bg-slate-600 p-[6px] text-white rounded-full">
            <FaRegHeart></FaRegHeart>
          </button>
        </div>

        <div className=" flex justify-start items-center gap-3 my-4">
          <p className=" font-semibold ">Size</p>
          <select className="w-12 border rounded ps-1 py-[2px] " name="" id="">
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </select>
        </div>
        <div>
          <p className=" font-semibold uppercase">Choose Color </p>
          <div className=" flex gap-2 my-2">
            <div className=" h-4 w-4 rounded-full bg-black"></div>
            <div className=" h-4 w-4 rounded-full bg-red-600"></div>
            <div className=" h-4 w-4 rounded-full bg-blue-600"></div>
            <div className=" h-4 w-4 rounded-full bg-green-600"></div>
          </div>
        </div>
        <div className=" text-sm my-4">
          {stock} items
          <span className=" inline-block hover:bg-sky-600 duration-300 mx-4 px-2 py-1 bg-green-600 text-white rounded-md ">
            In stock
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
