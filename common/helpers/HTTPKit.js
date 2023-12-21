import axios from "axios";
import APIKit from "./APIKit";

const client = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 80000,
});

let clientIsAuthenticated = false;

const setClientToken = (token) => {
  const promise = new Promise((resolve, reject) => {
    try {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      clientIsAuthenticated = true;
      console.log("Setting jwt token : ", token);
      resolve(client);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
  return promise;
};

export const setTokenAndRedirect = (token, redirect = () => {}) => {
  const onSuccess = (client) => {
    let token = client.defaults.headers.common["Authorization"];
    token = token.replace("Bearer ", "");
    localStorage.setItem("token", token);
    redirect();
  };
  const onError = (error) => {
    console.log(error);
  };
  return setClientToken(token).then(onSuccess).catch(onError);
};

export const HTTPKit = {
  setClientToken,
  get: (url, params) => client.get(url, params),
  post: (url, payload) => client.get(url, payload),
  put: (url, payload) => client.get(url, payload),
  patch: (url, payload) => client.get(url, payload),
  delete: (url, id) => client.get(url, id),
};

export default client;
