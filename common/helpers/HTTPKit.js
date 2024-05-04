import axios from "axios";
import APIKit from "./APIKit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./KeyChain";
import { deferred } from "./UtilKit";

const defaultError = {
  NOT_AUTHENTICATED: new Error({
    error: "NOT_AUTHENTICATED",
    message: "Client is not authenticated",
  }),
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 9000,
});

client.interceptors.response.use(
  (response) => response,
  function (error) {
    console.log({ apiError: error });
    if (
      error.response.status === 401 &&
      error.response.data.message === "token_not_valid"
    ) {
      console.log("token expired, generating new token...");
      const getRefreshToken = () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (refreshToken) {
          const handleSuccess = (response) => {
            const accessToken = response.data.accessToken;
            setClientToken(accessToken)
              .then((client) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
                HTTPKit.isReady.resolve(client);
              })
              .catch((error) => {
                console.log(error);
                throw error;
              });
          };
          const handleFailure = (error) => {
            console.log(error);
          };

          return APIKit.refreshToken(refreshToken)
            .then(handleSuccess)
            .catch(handleFailure);
        } else {
          console.log("Refresh token not found");
        }
      };
      return getRefreshToken();
    } else {
      throw error;
    }
  }
);

const defer = new deferred();

let clientIsAuthenticated = false;

const setClientToken = (token) => {
  const promise = new Promise((resolve, reject) => {
    try {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      clientIsAuthenticated = true;
      isReady();
      console.log("Setting jwt token : ", token);
      resolve(client);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
  return promise;
};

const isReady = () => {
  function riseNotAuthenticatedError() {
    console.log("Does not have token, rejected promise");
    throw defaultError.NOT_AUTHENTICATED;
  }

  try {
    if (clientIsAuthenticated) {
      console.log("Client is authenticated, resolving client....");
      defer.resolve(client);
    } else {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        setClientToken(token)
          .then(() => {
            console.log("Get token resolving client...");
            defer.resolve(client);
          })
          .catch(() => {
            riseNotAuthenticatedError();
          });
      } else {
        riseNotAuthenticatedError();
      }
    }
  } catch (error) {
    console.log(error);
  }
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
    HTTPKit.isReady.resolve(client);
    redirect();
  };
  const onError = (error) => {
    console.log(error);
  };
  return setClientToken(accessToken).then(onSuccess).catch(onError);
};

export const HTTPKit = {
  setClientToken,
  isReady: defer,
  get: (url, params) => client.get(url, params),
  post: (url, payload) => client.get(url, payload),
  put: (url, payload) => client.get(url, payload),
  patch: (url, payload) => client.get(url, payload),
  delete: (url, id) => client.get(url, id),
};

export default client;
