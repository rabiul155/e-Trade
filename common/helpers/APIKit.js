import client from "./HTTPKit";

const APIKit = {
  product: {
    getProductsList: () => client.get("products"),
  },
};

export default APIKit;
