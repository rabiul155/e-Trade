"use client";

import { FaStar } from "react-icons/fa";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import p1 from "../../../public/Images/p1.jpg";
import p2 from "../../../public/Images/p2.jpg";
import p3 from "../../../public/Images/p3.jpg";
import Loading from "@/components/Loading/Loading";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";

import { useSelector } from "react-redux";

function ProductPage() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const {
    isLoading,
    error,
    data: products = [],
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await APIKit.product.getProductsList();

      return response.data.data.products;
    },
  });

  const addToCart = (product) => {
    console.log(product);
    const payload = {
      customer: user.name,
      email: user.email,
      product: product,
    };
    const onSuccess = (data) => {
      console.log(data);
    };
    const onFailure = (error) => {
      console.log(error);
      throw error;
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

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-2 p-6">
      <aside className="shrink-0 md:w-72 w-full text-gray-800 md:pr-4 md:h-[82vh] md:overflow-x-hidden md:overflow-y-scroll">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <h3 className="mb-6 font-semibold text-gray-800 text-xl">Category</h3>
          <ul>
            <li className="my-4">
              {" "}
              <p>
                Shirt <span className=" float-right">112</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                Pant <span className=" float-right">640</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                T-Shirt <span className=" float-right">510</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                Shoe <span className=" float-right">120</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                Kids Clothes <span className=" float-right">110</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                Watch <span className=" float-right">320</span>
              </p>
            </li>
            <li className="my-4">
              {" "}
              <p>
                Accesories <span className=" float-right">60</span>
              </p>
            </li>
          </ul>
          <h3 className="my-6 font-semibold text-gray-800 text-xl">Colors</h3>
          <ul>
            <li className="my-3">
              <span className="inline-block h-3  w-3  rounded-full bg-black"></span>{" "}
              <span className="mx-3">Black</span>
            </li>
            <li className="my-3">
              <span className="inline-block h-3  w-3  rounded-full bg-red-600"></span>{" "}
              <span className="mx-3">Red</span>
            </li>
            <li className="my-3">
              <span className="inline-block h-3  w-3  rounded-full bg-blue-600"></span>{" "}
              <span className="mx-3">Blue</span>
            </li>
            <li className="my-3">
              <span className="inline-block h-3  w-3  rounded-full bg-green-600"></span>{" "}
              <span className="mx-3">Green</span>
            </li>
            <li className="my-3">
              <span className="inline-block h-3  w-3  rounded-full bg-orange-600"></span>{" "}
              <span className="mx-3">Orange</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="my-6 font-semibold text-gray-800 text-xl">
            Popular Products
          </h3>
          <div className="my-4 flex justify-start gap-3 ">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p1}
            ></Image>
            <div>
              <p>Injected Humour</p>
              <small>
                560 BDT <del className="mx-2">600 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-start gap-3">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p2}
            ></Image>
            <div>
              <p>Classical Literature</p>
              <small>
                650 BDT <del className="mx-2">700 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-start gap-3">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p3}
            ></Image>
            <div>
              <p>Classical Literature</p>
              <small>
                720 BDT <del className="mx-2">800 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
