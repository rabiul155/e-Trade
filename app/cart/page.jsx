"use client";
import APIKit from "@/common/helpers/APIKit";
import Loading from "@/components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/cart"],
    queryFn: async () => {
      const result = await APIKit.cart.getCartProducts();
      console.log(result);
      return result.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>fetching error</div>;
  }

  //   const handleDelete = (id) => {
  //     const confirm = window.confirm("Are you sure to delete this product ");
  //     if (confirm) {
  //       const remainingProduct = products.filter((product) => product.id !== id);
  //       localStorage.setItem("cart", JSON.stringify(remainingProduct));
  //       setProducts(remainingProduct);
  //     } else {
  //     }
  //   };

  if (products?.length === 0) {
    return (
      <div className="text-lg font-semibold mt-6 text-center">
        {" "}
        You do not buy any product yet
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 w-4/5 gap-4 m-4">
      {products?.map((product) => (
        <div className="flex justify-between items-center">
          <div className="my-4 flex justify-start gap-3">
            <img
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={product?.img}
            ></img>
            <div>
              <p>{product?.name}</p>
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
          <div className="  ">
            <button
              className="text-white rounded px-2 py-1 bg-gray-800"
              //   onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
