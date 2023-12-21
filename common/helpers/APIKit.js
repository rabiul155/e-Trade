import client, { HTTPKit } from "./HTTPKit";

const APIKit = {
  setClientToken: HTTPKit.setClientToken,
  auth: {
    register: (payload) => client.post("/register", payload),
    login: (payload) => client.post("/token", payload),
  },

  product: {
    getProductsList: () => client.get("products"),
    getSingleProduct: (_id) => client.get(`/product/${_id}`),
  },

  cart: {
    getCartProducts: (params = {}) => client.get("/cart", params),
    addToCart: (payload) => client.post("/cart", payload),
    deleteFromCart: (_id) => client.delete(`/cartDelete/${_id}`),
  },
};

export default APIKit;
