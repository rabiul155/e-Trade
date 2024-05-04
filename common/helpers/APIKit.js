import client, { HTTPKit } from "./HTTPKit";

const APIKit = {
  setClientToken: HTTPKit.setClientToken,

  refreshToken: (refreshToken) =>
    client.post("/users/refreshToken", { refreshToken }),

  getUserInfo: (params = {}) => client.get("/users", params),

  auth: {
    register: (payload) => client.post("/users/register", payload),
    login: (payload) => client.post("/users/login", payload),
  },

  product: {
    getProductsList: () => client.get("/products"),
    getSingleProduct: (_id) => client.get(`/products/${_id}`),
  },

  cart: {
    getCartProducts: (email) => client.get(`/carts?email=${email}`),
    addToCart: (payload) => client.post("/carts", payload),
    deleteFromCart: (_id) => client.delete(`/carts/${_id}`),
  },
};

export default APIKit;
