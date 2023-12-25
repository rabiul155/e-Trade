import axios from "axios";
import APIKit from "./APIKit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./KeyChain";

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

export const setTokenAndRedirect = (
  accessToken,
  refreshToken,
  redirect = () => {}
) => {
  const onSuccess = (client) => {
    let token = client.defaults.headers.common["Authorization"];
    token = token.replace("Bearer ", "");
    localStorage.setItem(ACCESS_TOKEN, token);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
    redirect();
  };
  const onError = (error) => {
    console.log(error);
  };
  return setClientToken(accessToken).then(onSuccess).catch(onError);
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
