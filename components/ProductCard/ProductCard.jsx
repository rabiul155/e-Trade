import { FaStar, FaCartArrowDown, FaRegEye, FaRegHeart } from "react-icons/fa";

import styles from "./ProductCard.module.css";
import { useRouter } from "next/navigation";

function ProductCard({ product }) {
  const { _id, img, name, price, ratingsCount } = product;

  const router = useRouter();

  const viewDetails = () => {
    localStorage.setItem("product", JSON.stringify(product));
    router.push(`/products/${_id}`);
  };

  const cartProduct = [];

  const addToCart = () => {
    const oldCart = JSON.parse(localStorage.getItem("cart"));
    window.alert("cart product done");
    if (!oldCart) {
      const initialCart = [product];
      localStorage.setItem("cart", JSON.stringify(initialCart));
    } else {
      const newCart = [...oldCart, product];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className="rounded bg-[#f9f9fa] mx-auto ">
        <div className={styles.cardContent}>
          <img src={img} className="rounded-t mx-auto"></img>
          <table className={styles.tableContent}>
            <tbody>
              <tr
                className=" border
                         border-collapse flex   bg-white "
              >
                <td
                  onClick={viewDetails}
                  className="h-9 w-11 border
                         border-collapse hover:bg-gray-900 hover:text-white duration-300 flex items-center justify-center"
                >
                  <FaRegEye></FaRegEye>
                </td>
                <td
                  onClick={addToCart}
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
