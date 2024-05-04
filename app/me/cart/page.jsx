"use client";
import APIKit from "@/common/helpers/APIKit";
import Loading from "@/components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  const {
    refetch,
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/cart"],
    queryFn: async () => {
      const result = await APIKit.cart.getCartProducts();
      return result.data.data.carts;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>fetching error</div>;
  }

  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure to delete this product ");
    if (confirm) {
      const onSuccess = (data) => {
        if (data.data) {
          console.log(data.data);
          refetch();
        }
      };

      const onError = (data) => {
        console.log(data);
      };
      const promise = APIKit.cart
        .deleteFromCart(_id)
        .then(onSuccess)
        .catch(onError)
        .finally();

      toast.promise(promise, {
        loading: "Loading...",
        success: "Successfully deleted",
        error: "Something went wrong",
      });
    } else {
      return;
    }
  };

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
              src={product?.product?.img}
            ></img>
            <div>
              <p>{product?.product?.name}</p>
              <small>Price : {product?.product?.price}</small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <small className=" text-gray-500 -mt-[2px]  mx-1">
                  {product?.product?.ratingsCount}
                </small>
              </div>
            </div>
          </div>
          <div className="  ">
            <button
              className="text-white rounded px-2 py-1 bg-gray-800"
              onClick={() => handleDelete(product?._id)}
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
