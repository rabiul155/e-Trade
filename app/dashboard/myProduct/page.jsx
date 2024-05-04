"use client";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading/Loading";
import APIKit from "@/common/helpers/APIKit";

function MyProductPage() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/products"],
    queryFn: async () => {
      const result = await APIKit.product.getProductsList();
      return result.data.data.products;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return "An error has occurred: ";
  }

  return (
    <div className=" m-2 lg:m-0">
      <div className="hidden sm:block h-screen overflow-y-scroll">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Rating</th>
              <th className="p-3 ">Quantity</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products1.data?.map((product) => (
              <tr
                key={product.id}
                className="border-b  border-gray-300 bg-gray-100"
              >
                <td className="p-3">
                  <img className="h-16 w-16" src={product.img} alt="" />
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.price} BDT</td>
                <td className="p-3">{product.ratings}</td>
                <td className="p-3 ">{product.stock}</td>
                <td className="p-3 ">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <span>Delete</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product._id} className="my-4 flex justify-start gap-3">
            <img
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={product?.img}
            ></img>
            <div>
              <p>{product.name}</p>
              <small>Price : {product.price}</small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <small className=" text-gray-500 -mt-[2px]  mx-1">
                  {product.ratingsCount}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProductPage;
