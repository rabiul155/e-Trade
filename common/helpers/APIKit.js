import client from "./HTTPKit";

const APIKit = {
  product: {
    getProductsList: () => client.get("products"),
    getSingleProduct: (_id) => client.get(`/product/${_id}`),
  },

  cart: {
    addToCart: (payload) => client.post("/cart", payload),
  },
};

export default APIKit;
