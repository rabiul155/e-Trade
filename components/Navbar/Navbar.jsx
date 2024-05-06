"use client";

import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/Images/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/helpers/KeyChain";
import { setUser } from "@/redux/authSlice/authSlice";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const menuItems = (
    <>
      <Link onClick={() => setOpen(false)} href="/products">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer ">
          Products
        </li>
      </Link>
      <Link onClick={() => setOpen(false)} href="/cart">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer">
          Cart
        </li>
      </Link>
      <Link onClick={() => setOpen(false)} href="/help">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer ">
          Help
        </li>
      </Link>
    </>
  );

  const dashboardMenu = (
    <>
      <Link onClick={() => setOpen(false)} href="/dashboard/myProduct">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2  cursor-pointer">
          My Product
        </li>
      </Link>
      <Link onClick={() => setOpen(false)} href="/dashboard/addProduct">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer">
          Add Product
        </li>
      </Link>

      <Link onClick={() => setOpen(false)} href="/dashboard/progress">
        <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-2xl px-4  py-2  cursor-pointer">
          Progress
        </li>
      </Link>
    </>
  );

  const handleLogOut = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    const payload = {
      isSuccess: false,
      loading: false,
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
              <Image src={logo} alt="logo"></Image>
            </Link>

            <ul className="hidden md:flex gap-5 items-center ">
              {menuItems}
              <Link href="/dashboard/myProduct">
                <li className="hover:bg-gray-900 flex gap-2 items-center hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer ">
                  <span>Dashboard</span>
                  <span
                    className={`transform transition-all duration-150 ${
                      show ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <MdKeyboardArrowRight />
                  </span>
                </li>
              </Link>
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
        className={`fixed top-0 w-[320px] h-screen z-20 transition-all duration-500 block md:hidden ${
          open ? "left-0" : "-left-96"
        }`}
      >
        <div className="relative h-screen px-3 py-12 bg-slate-200">
          <ul className="w-[90%]">
            {menuItems}
            <div onClick={() => setShow(!show)}>
              <li className="hover:bg-gray-900 flex gap-2 items-center hover:text-white duration-300 rounded-2xl px-4  py-2 cursor-pointer ">
                <span>Dashboard</span>
                <span
                  className={`transform transition-all duration-150 ${
                    show ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <MdKeyboardArrowRight />
                </span>
              </li>
            </div>
          </ul>

          <ul
            className={`absolute w-[80%] duration-500 top-52 ${
              show ? "left-8" : "-left-96"
            }`}
          >
            {dashboardMenu}
          </ul>

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
