import { FaStar } from "react-icons/fa";
import img1 from '../../public/Images/topSell1.jpg'
import img2 from '../../public/Images/topSell2.jpg'
import img3 from '../../public/Images/topSell3.jpg'
import img4 from '../../public/Images/topSell4.jpg'
import Image from "next/image";

function TopSell() {
    return (
        <div className='m-4 lg:m-10'>
            <h2 className='mb-10 font-bold text-4xl'>Top Sell Last Month</h2>
            <hr className=" h-1" />
            <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 '>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-2 pt-16 lg:p-10'>

                    <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                        <Image src={img1}></Image>

                    </div>
                    <div className='absolute top-6 right-6 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        sold out
                    </div>
                    <div>
                        <p className='hidden lg:block font-bold text-gray-600 my-3 text-xl'>Blazer </p>
                        <h2 className=' font-bold text-gray-700 lg:text-lg cursor-pointer hover:text-blue-600 duration-300'>Mens Blazer Jacket for party</h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>6543</span>
                        </div>

                        <p className=' font-bold text-gray-600 lg:mt-6 lg:text-xl'>price : <span className="text-[#ff497c]">600 BDT</span></p>


                    </div>
                </div>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>

                    <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                        <Image src={img2}></Image>
                    </div>

                    <div className='absolute top-6 right-6 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        flash sell
                    </div>
                    <div>
                        <p className='hidden lg:block font-bold text-gray-600 my-3 text-xl'>Hoddie</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>Full cotton garagic design Hoddie</h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>4764</span>
                        </div>
                        <p className=' font-bold text-gray-600 lg:mt-6 lg:text-xl'>price : <span className="text-[#ff497c]">700 BDT</span></p>
                    </div>
                </div>

                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                        <Image src={img3}></Image>
                    </div>
                    <div className='absolute top-6 right-6 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        20% off
                    </div>
                    <div>
                        <p className='hidden lg:block font-bold text-gray-600 my-3 text-xl'>T-Shirt</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>Best comfort cotton t-shirt </h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>5564</span>
                        </div>
                        <p className=' font-bold text-gray-600 lg:mt-6 lg:text-xl'>price : <span className="text-[#ff497c]">800 BDT</span></p>
                    </div>
                </div>
                <div className='relative rounded-md items-center grid grid-cols-2 gap-4 lg:gap-10 bg-[#f6f7fb] p-4 pt-16 lg:p-10'>
                    <div className="w-36 h-36 lg:h-full lg:w-full rounded-full">
                        <Image src={img4}></Image>
                    </div>
                    <div className='absolute top-6 right-6 text-white px-3 pt-[2px] pb-[4px] rounded-md font-semibold  bg-black inline-block'>
                        sold out
                    </div>
                    <div>
                        <p className='hidden lg:block font-bold text-gray-600 my-3 text-xl'>T-shirt</p>
                        <h2 className=' font-bold text-gray-700 text-lg cursor-pointer hover:text-blue-600 duration-300'>New Indian cotton t-shirt</h2>
                        <div className=' flex items-center my-2'>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <FaStar className='text-yellow-400 m-[2px]' size={20}></FaStar>
                            <span className=' text-gray-500 text-sm m-1'>7664</span>
                        </div>
                        <p className=' font-bold text-gray-600 lg:mt-6 lg:text-xl'>price : <span className="text-[#ff497c]">550 BDT</span></p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TopSell;