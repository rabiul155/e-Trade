"use client";
import { dashboardContext } from "@/context/Context";
import Link from "next/link";
import { useContext } from "react";

function DashboardLayout({ children }) {
  const { toggle, setToggle } = useContext(dashboardContext);
  console.log(toggle);

  return (
    <div>
      <div className="relative grid grid-cols-1 md:grid-cols-[240px,1fr] ">
        <div className="hidden md:block ">
          <ul className=" min-h-screen p-2 bg-slate-200 ">
            <Link href="/dashboard/addProduct">
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2 cursor-pointer text-gray-700">
                Add Product
              </li>
            </Link>
            <Link href="/dashboard/myProduct">
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
                My Product
              </li>
            </Link>
            <Link href="/dashboard/progress">
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
                Progress
              </li>
            </Link>
          </ul>
        </div>

        <div
          className={`absolute w-[240px] h-screen z-10 duration-500 block md:hidden ${
            toggle ? "left-0" : "-left-60"
          }`}
        >
          <ul className="p-2 h-screen bg-slate-200 ">
            <Link onClick={() => setToggle(false)} href="/dashboard/addProduct">
              {" "}
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2 cursor-pointer text-gray-700">
                Add Product
              </li>
            </Link>
            <Link onClick={() => setToggle(false)} href="/dashboard/myProduct">
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
                My Product
              </li>
            </Link>
            <Link onClick={() => setToggle(false)} href="/dashboard/progress">
              <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">
                Progress
              </li>
            </Link>
          </ul>
        </div>

        <div className=" ">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
