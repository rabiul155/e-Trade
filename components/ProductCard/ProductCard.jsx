import { FaStar, FaCartArrowDown, FaRegEye, FaRegHeart } from "react-icons/fa";

import styles from "./ProductCard.module.css";

import Link from "next/link";
import toast from "react-hot-toast";
import APIKit from "@/common/helpers/APIKit";

function ProductCard({ product }) {
  const { _id, img, name, price, ratingsCount } = product;

  const addToCart = (product) => {
    const payload = {
      customer: "demo",
      quantity: 1,
      product: product,
    };
    const onSuccess = (data) => {
      console.log(data);
    };
    const onFailure = (error) => {
      console.log(error);
    };

    const promise = APIKit.cart
      .addToCart(payload)
      .then(onSuccess)
      .catch(onFailure)
      .finally();
    return toast.promise(promise, {
      loading: "Loading...",
      success: "Product added successfully!",
      error: "Something went wrong...",
    });
  };

  return (
    <div className={styles.mainContent}>
      <div className="rounded bg-[#f9f9fa] mx-auto ">
        <div className={styles.cardContent}>
          <img src={img} className="rounded-t mx-auto"></img>
          <table className={styles.tableContent}>
            <tbody>
              <tr className="border border-collapse flex bg-white ">
                <td className="h-9 w-11 border border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center">
                  <Link href={`me/products/${_id}`}>
                    <FaRegEye></FaRegEye>
                  </Link>
                </td>
                <td
                  onClick={() => addToCart(product)}
                  className="h-9 w-11 border
                         border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center"
                >
                  <FaCartArrowDown></FaCartArrowDown>
                </td>
                <td
                  className="h-9 w-11 border
                         border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center"
                >
                  <FaRegHeart></FaRegHeart>
                </td>
              </tr>
            </tbody>
          </table>
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
