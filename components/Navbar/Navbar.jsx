"use client";

import { HiMenu } from "react-icons/hi";

import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/Images/logo.png";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardContext } from "@/context/Context";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/helpers/KeyChain";
import { useRouter } from "next/navigation";
import { setUser } from "@/redux/authSlice/authSlice";

function Navbar() {
  const { toggle, setToggle } = useContext(dashboardContext);

  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  console.log(open);

  const dashboardMenu = (
    <ul className=" ">
      <Link onClick={() => setOpen(false)} href="/dashboard/addProduct">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2 cursor-pointer text-gray-700">
          Add Product
        </li>
      </Link>
      <Link onClick={() => setOpen(false)} href="/dashboard/myProduct">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
          My Product
        </li>
      </Link>
      <Link onClick={() => setOpen(false)} href="/dashboard/progress">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
          Progress
        </li>
      </Link>
    </ul>
  );

  const menuItems = (
    <>
      <li className="mr-5 flex items-center">
        <Link
          onClick={() => setOpen(false)}
          className="hover:bg-[#333333] font-medium hover:text-white  px-4 py-2 rounded-2xl duration-150"
          href="/products"
        >
          Products
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          onClick={() => setOpen(false)}
          className="hover:bg-[#333333] font-medium hover:text-white  px-4 py-2 rounded-2xl duration-150"
          href="/cart"
        >
          Cart
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          onClick={() => setOpen(false)}
          className="hover:bg-[#333333] font-medium hover:text-white px-4 py-2 rounded-2xl duration-150"
          href="/help"
        >
          Help
        </Link>
      </li>
      <li className="mr-5 flex items-center">
        <Link
          onClick={() => setShow(!show)}
          className="hover:bg-[#333333] flex gap-2 items-center font-medium hover:text-white px-4 py-2 rounded-2xl duration-150"
          href="/dashboard"
        >
          <span>Dashboard</span>
          <span
            className={`transform transition-all duration-150 ${
              show ? "rotate-90" : "rotate-0"
            }`}
          >
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    const payload = {
      isSuccess: false,
      loading: true,
      isError: false,
      authError: "",
      user: {},
    };
    dispatch(setUser(payload));
  };

  return (
    <div className="">
      <div className="bg-[#f6f7fb] z-10">
        <div className="  flex justify-between items-center px-2 lg:px-4 text-gray-800 h-[70px]">
          <div className="flex items-center">
            <Link className="text-[22px] font-medium mr-0 lg:mr-6" href="/">
              <Image src={logo}></Image>
            </Link>

            <ul className="lg:flex hidden items-center text-[16px]">
              {menuItems}
            </ul>
          </div>
          <div className="flex items-center">
            {user?.email ? (
              <button
                onClick={handleLogOut}
                className="lg:mr-5  text-[16px] font-medium hover:bg-[#333333] hover:text-white  px-4 py-2 rounded-2xl duration-150"
              >
                LogOut
              </button>
            ) : (
              <>
                <Link href="/login">
                  <button className="lg:mr-5  text-[16px] font-medium hover:bg-[#333333] hover:text-white  px-4 py-2 rounded-2xl duration-150">
                    LogIn
                  </button>
                </Link>

                <Link className=" hidden lg:block" href="/signup">
                  <button className=" bg-white text-black rounded-2xl lg:px-3 px-2 py-1 font-medium duration-150">
                    SignUp
                  </button>
                </Link>
              </>
            )}

            <button
              onClick={() => setOpen(true)}
              className="hover:bg-[#333333] p-1 rounded-[50%] duration-150 text-white font-bold lg:hidden block"
            >
              <HiMenu
                className="text-gray-800 hover:text-white font-bold "
                size={25}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 w-[320px] h-screen z-20 duration-500 block md:hidden ${
          open ? "left-0" : "-left-70"
        }`}
      >
        <div className="relative h-screen">
          <ul className=" bg-slate-200 h-screen px-2 py-4">{menuItems}</ul>

          <div>{dashboardMenu}</div>

          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 hover:bg-[#333333] p-1 rounded-full duration-150 text-white font-bold"
          >
            <RxCross2
              className="text-gray-800 hover:text-white font-bold"
              size={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
