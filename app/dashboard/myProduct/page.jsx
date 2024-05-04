"use client";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading/Loading";
import APIKit from "@/common/helpers/APIKit";
import toast from "react-hot-toast";

function MyProductPage() {
  const {
    refetch,
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/products"],
    queryFn: async () => {
      const result = await APIKit.product.getProductsList();
      return result.data.data.products;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return "An error has occurred: ";
  }
  const handleDelete = (id) => {
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
      const promise = APIKit.product
        .deleteProduct(id)
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

  return (
    <div className=" m-2 lg:m-0">
      <div className="hidden sm:block h-screen overflow-y-scroll">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Rating</th>
              <th className="p-3 ">Quantity</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b  border-gray-300 bg-gray-100"
              >
                <td className="p-3">
                  <img className="h-16 w-16" src={product.img} alt="" />
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.price} BDT</td>
                <td className="p-3">{product.ratings}</td>
                <td className="p-3 ">{product.stock}</td>
                <td className="p-3 ">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProductPage;
