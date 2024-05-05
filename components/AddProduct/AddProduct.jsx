import { Formik, useFormik } from "formik";
import React from "react";
import { number, object, string } from "yup";
import InputField from "../InputField/InputField";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = object().shape({
  name: string().required(),
  category: string().required(),
  seller: string().required(),
  price: number().required(),
  rating: number().required(),
  ratingCount: number().required(),
  stock: number().required(),
  image: string().required(),
});

function AddProduct() {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        category: "",
        seller: "",
        price: null,
        stock: null,
        rating: null,
        ratingCount: null,
        image: "",
        details: "",
      },
      validationSchema: formSchema,
      onSubmit: (values) => {
        console.log(values);

        const handleSuccess = (response) => {
          console.log(response.data.data);
          router.push("/products");
        };
        const handleError = (error) => {
          console.log(error);
          throw error;
        };

        const promise = APIKit.product
          .createProduct(values)
          .then(handleSuccess)
          .catch(handleError);

        toast.promise(promise, {
          loading: "Loading...",
          success: "Product added successfully",
          error: "Product does not added",
        });
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 my-6 mx-4 lg:grid-cols-2 gap-6 "
    >
      <div>
        <InputField
          label="Product name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter product name"
        ></InputField>
        {errors.name && touched.name ? (
          <p className=" text-sm text-red-600">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Product category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter product category"
        ></InputField>
        {errors.category && touched.category ? (
          <p className=" text-sm text-red-600">{errors.category}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Seller"
          type="text"
          name="seller"
          value={values.seller}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter product seller"
        ></InputField>
        {errors.seller && touched.seller ? (
          <p className=" text-sm text-red-600">{errors.seller}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Product price"
          type="number"
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Product price"
        ></InputField>
        {errors.price && touched.price ? (
          <p className=" text-sm text-red-600">{errors.price}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Product image"
          type="text"
          name="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Product image url"
        ></InputField>
        {errors.image && touched.image ? (
          <p className=" text-sm text-red-600">{errors.image}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Product rating"
          type="number"
          name="rating"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Product rating"
        ></InputField>
        {errors.rating && touched.rating ? (
          <p className=" text-sm text-red-600">{errors.rating}</p>
        ) : null}
      </div>
      <div>
        <InputField
          label="Product ratingCount"
          type="number"
          name="ratingCount"
          value={values.ratingCount}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Product ratingCount"
        ></InputField>
        {errors.ratingCount && touched.ratingCount ? (
          <p className=" text-sm text-red-600">{errors.ratingCount}</p>
        ) : null}
      </div>

      <div>
        <InputField
          label="Product stock"
          type="number"
          name="stock"
          value={values.stock}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter product stock"
        ></InputField>
        {errors.stock && touched.stock ? (
          <p className=" text-sm text-red-600">{errors.stock}</p>
        ) : null}
      </div>

      <div className="lg:col-span-2">
        <label for="details" className="text-sm">
          Product Details
        </label>
        <textarea
          id="details"
          name="details"
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Product details"
          className="w-full px-4 py-[10px] text-[14px] rounded-lg col-span-2 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        ></textarea>
        {errors.details && touched.details ? (
          <p className=" text-sm text-red-600">{errors.details}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="max-w-xl lg:col-span-2 block text-white bg-gray-800 hover:bg-gray-700 mx-auto rounded-lg px-6 py-3 border border-black"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
