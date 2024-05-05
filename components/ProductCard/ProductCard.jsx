import { FaStar, FaCartArrowDown, FaRegEye, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

function ProductCard({ product, addToCart }) {
  const { _id, img, name, price, ratingsCount } = product;

  return (
    <div className="group">
      <div className="rounded bg-[#f9f9fa] mx-auto ">
        <div className="relative overflow-hidden w-full">
          <img
            src={img}
            className="rounded-t h-64 w-full object-cover object-center"
          ></img>
          <div className="absolute bottom-3 lg:-bottom-10 lg:group-hover:bottom-3 transition-all duration-500 left-0 right-0 flex justify-center">
            <table className="cursor-pointer">
              <tbody>
                <tr className="border border-collapse flex bg-white">
                  <td className="h-9 w-11 border border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center">
                    <Link href={`/products/${_id}`}>
                      <FaRegEye></FaRegEye>
                    </Link>
                  </td>
                  <td
                    onClick={() => addToCart(product)}
                    className="h-9 w-11 border border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center"
                  >
                    <FaCartArrowDown></FaCartArrowDown>
                  </td>
                  <td className="h-9 w-11 border border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center">
                    <FaRegHeart></FaRegHeart>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" px-2 py-6">
          <h3 className="font-bold text-[14px] ">{name}</h3>
          <div className="my-1 flex  gap-[2px]">
            <FaStar className="text-yellow-400 "></FaStar>
            <FaStar className="text-yellow-400 "></FaStar>
            <FaStar className="text-yellow-400 "></FaStar>
            <FaStar className="text-yellow-400 "></FaStar>
            <small className="text-gray-700  mx-1">{ratingsCount}</small>
          </div>
          <p className="font-semibold">Price : {price} BDT</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
