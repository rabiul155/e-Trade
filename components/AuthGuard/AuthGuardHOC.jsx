"use client";

import APIKit from "@/common/helpers/APIKit";
import { setTokenAndRedirect } from "@/common/helpers/HTTPKit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/helpers/KeyChain";
import { setUser } from "@/redux/authSlice/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function AuthGuardHOC({ children }) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  console.log({ accessToken, refreshToken });

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    let payload;
    payload = {
      isSuccess: false,
      loading: true,
      isError: false,
      authError: "",
      user: {},
    };
    dispatch(setUser(payload));
    const onSuccess = (response) => {
      console.log(response.data);
      payload = {
        isSuccess: true,
        loading: false,
        isError: false,
        authError: "",
        user: response.data.data.user,
      };

      dispatch(setUser(payload));
    };
    const onError = (error) => {
      payload = {
        isSuccess: false,
        loading: false,
        isError: true,
        authError: error.message,
        user: {},
      };
      console.log(error);
      dispatch(setUser(payload));
    };
    return APIKit.getUserInfo().then(onSuccess).catch(onError);
  };

  useEffect(() => {
    if (accessToken && refreshToken) {
      setTokenAndRedirect(accessToken, refreshToken)
        .then(getUserInfo)

        .catch((error) => {
          console.log(error);
          toast.error("something went wrong please reload");
        });
    } else {
      const payload = {
        isSuccess: false,
        loading: false,
        isError: false,
        authError: "",
        user: {},
      };
      dispatch(setUser(payload));
    }
  }, [accessToken, refreshToken]);

  return children;
}

export default AuthGuardHOC;
