"use client";
import APIKit from "@/common/helpers/APIKit";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string().min(2).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  division: Yup.string().required("select one"),
  district: Yup.string().required("select one"),
  // file: Yup.string().required("please enter your photo"),
  password: Yup.string()
    .required("please enter your password")
    .min(6, "password should be at least 6 character"),
});
const initialValues = {
  name: "",
  email: "",
  division: "",
  district: "",
  password: "",
};

function SignUpPage() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,

      onSubmit: (values, action) => {
        const payload = values;
        const onSuccess = (result) => {
          console.log(result);
          action.resetForm();
          router.push("/login");
        };
        const onError = (error) => {
          console.log(error);
        };

        const promise = APIKit.auth
          .register(payload)
          .then(onSuccess)
          .catch(onError)
          .finally();
        return toast.promise(promise, {
          loading: "Loading...",
          success: "Registered successfully",
          error: "Something went wrong",
        });
      },
    });

  const divisionDistricts = {
    Barishal: [
      "Barguna",
      "Barishal",
      "Bhola",
      "Jhalokati",
      "Patuakhali",
      "Pirojpur",
    ],
    Chattogram: [
      "Bandarban",
      "Brahmanbaria",
      "Chandpur",
      "Chattogram",
      "Cumilla",
      "Cox's Bazar",
      "Feni",
      "Khagrachhari",
      "Lakshmipur",
      "Noakhali",
      "Rangamati",
    ],
    Dhaka: [
      "Dhaka",
      "Gazipur",
      "Kishoreganj",
      "Manikganj",
      "Munshiganj",
      "Narayanganj",
      "Narsingdi",
      "Tangail",
      "Faridpur",
      "Gopalganj",
      "Madaripur",
      "Rajbari",
      "Shariatpur",
      "Dhaka Cantonment",
      "Keraniganj",
      "Dohar",
      "Dhamrai",
      "Savar",
    ],
    Khulna: [
      "Bagerhat",
      "Chuadanga",
      "Jessore",
      "Jhenaidah",
      "Khulna",
      "Kushtia",
      "Magura",
      "Meherpur",
      "Narail",
      "Satkhira",
    ],
    Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
    Rajshahi: [
      "Bogra",
      "Chapai Nawabganj",
      "Joypurhat",
      "Naogaon",
      "Natore",
      "Pabna",
      "Rajshahi",
      "Sirajganj",
    ],
    Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
    Rangpur: [
      "Dinajpur",
      "Gaibandha",
      "Kurigram",
      "Lalmonirhat",
      "Nilphamari",
      "Panchagarh",
      "Rangpur",
      "Thakurgaon",
    ],
  };

  return (
    <div className="bg-white w-full md:max-w-md mx-auto px-4 my-4 lg:px-10">
      <h1 className="text-xl md:text-2xl font-bold text-center  ">SignUp </h1>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Name"
          ></InputField>
          {errors.name && touched.name ? (
            <p className=" text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div className="mt-4">
          <InputField
            label="Email address"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Email Address"
          ></InputField>
          {errors.email && touched.email ? (
            <p className=" text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 ">
          <div>
            <label htmlFor="division">Division</label>
            <select
              name="division"
              onBlur={handleBlur}
              value={values.division}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[14px] rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none"
            >
              <option disabled selected>
                Select Division
              </option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {errors.district && touched.district ? (
              <p className=" text-sm text-red-600">{errors.district}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="district">District</label>
            <select
              name="district"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.district}
              className="w-full px-4 py-3 text-[14px] rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none"
            >
              <option disabled selected>
                Select District
              </option>
              {divisionDistricts[values.division]?.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && touched.district ? (
              <p className=" text-sm text-red-600">{errors.district}</p>
            ) : null}
          </div>
        </div>

        {/* <div className="relative mt-4">
          <label className="block text-gray-700">Photo</label>
          <input
            type="file"
            name="file"
            onBlur={handleBlur}
            onChange={handleChange}
            className=" w-full mt-1 py-2 text-[14px] text-gray-900 border rounded-lg cursor-pointer bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none "
          />
          <div className="absolute top-7 w-[94px] bg-gray-800 pl-2  text-white py-[11px] text-sm border rounded-l-lg">
            Choose File
          </div>
          {errors.file && touched.file ? (
            <p className=" text-sm text-red-600">{errors.file}</p>
          ) : null}
        </div> */}

        <div className="mt-4">
          <InputField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Password"
          ></InputField>
          {errors.password && touched.password ? (
            <p className=" text-sm text-red-600">{errors.password}</p>
          ) : null}
        </div>

        <Button
          type="submit"
          text="SignUp"
          className="text-gray-100 bg-indigo-500 hover:bg-indigo-400"
        ></Button>

        <hr className="my-6 border-gray-300 w-full" />

        <Button
          type="button"
          text="LogIn with Google"
          className="text-gray-900 bg-white hover:bg-gray-100"
        ></Button>
      </form>
    </div>
  );
}

export default SignUpPage;
