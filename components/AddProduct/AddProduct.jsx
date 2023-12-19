import React from 'react';

function AddProduct() {
    return (
        <div className='m-2'>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div>
                    <label className="block text-gray-700">Product Category</label>
                    <input
                        type="text"
                        placeholder="eg: t-shirt"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>

                <div>
                    <label className="block text-gray-700">Product Name</label>
                    <input
                        type="text"

                        placeholder="cotton t-shirt"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-700">Product Price (BDT)</label>
                    <input
                        type="text"

                        placeholder="eg : 500"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div className='relative'>
                    <label className="block text-gray-700">Product Image</label>
                    <input
                        type='file'
                        class=" w-full py-2 mt-2 text-[14px] text-gray-900 border rounded-lg cursor-pointer bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none " />
                    <div className='absolute top-8 w-[94px] bg-gray-800 pl-2  text-white py-[11px] text-sm border rounded-l-lg'>
                        Choose File
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Product quantity</label>
                    <input
                        type="text"

                        placeholder="eg : 50"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-700">Product quantity</label>
                    <input
                        type="text"

                        placeholder="eg : 50"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-700">Product rating</label>
                    <input
                        type="text"

                        placeholder="eg : 5000"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div>
                    <label className="block text-gray-700">Product quantity</label>
                    <input
                        type="text"

                        placeholder="eg : 50"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                </div>
                <div className="lg:col-span-2">
                    <label for="bio" className="text-sm">Product Details</label>
                    <textarea id="bio" placeholder="Product details" className="w-full px-4 py-[10px] text-[14px] rounded-lg col-span-2 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"></textarea>
                </div>

                <button type="button" className="max-w-xl lg:col-span-2 block text-white bg-gray-800 hover:bg-gray-500 focus:bg-gray-100 mx-auto font-semibold rounded-lg px-4 py-[10px]  border border-gray-300">
                    Add Product
                </button>

            </form>
        </div>
    );
};

export default AddProduct;