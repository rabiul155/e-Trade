"use client";
import APIKit from "@/common/helpers/APIKit";
import { setTokenAndRedirect } from "@/common/helpers/HTTPKit";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import * as Yup from "yup";

const formSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string()
    .required("please enter your password")
    .min(6, "password should be at least 6 character"),
});

function page() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formSchema,

      onSubmit: (values, action) => {
        const payload = values;
        const onSuccess = (response) => {
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;

          setTokenAndRedirect(accessToken, refreshToken, () => {
            router.push("/");
          });

          action.resetForm();
        };
        const onError = (error) => {
          console.log(error);
        };

        const promise = APIKit.auth.login(payload);

        toast
          .promise(promise, {
            loading: "Loading...",
            success: "Login successfully",
            error: "Login failed",
          })
          .then(onSuccess)
          .catch(onError);
      },
    });

  return (
    <div
      className="bg-white w-full md:max-w-md mx-auto px-4 my-4 lg:px-10
            "
    >
      <h1 className="text-xl md:text-2xl font-bold text-center ">LogIn </h1>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
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

        <div className="text-right mt-2">
          <Link
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
          >
            Forgot Password?
          </Link>
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

        <p className="mt-4  text-center">
          Need an account?{" "}
          <Link
            href="/signup"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default page;
