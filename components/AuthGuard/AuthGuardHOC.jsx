"use client";

import APIKit from "@/common/helpers/APIKit";
import { setTokenAndRedirect } from "@/common/helpers/HTTPKit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/helpers/KeyChain";
import { getUser, setUser } from "@/redux/authSlice/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";

function AuthGuardHOC({ children }) {
  const [authentication, setAuthentication] = useState(false);

  const router = useRouter();
  // const pathname = usePathname();

  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const { isLoading, isError, isSuccess } = auth;

  const dispatch = useDispatch();

  let payload;

  const getUserInfo = () => {
    payload = {
      isSuccess: false,
      isLoading: true,
      isError: false,
      authError: "",
      user: {},
    };
    // dispatch(setUser(payload));
    const onSuccess = (response) => {
      payload = {
        isSuccess: true,
        isLoading: false,
        isError: false,
        authError: "",
        user: response.data,
      };

      dispatch(setUser(payload));
    };
    const onError = (error) => {
      payload = {
        isSuccess: false,
        isLoading: false,
        isError: true,
        authError: error.message,
        user: {},
      };
      dispatch(setUser(payload));
      console.log(error);
      router.push("/login");
    };
    return APIKit.getUserInfo().then(onSuccess).catch(onError);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    console.log("access token ", accessToken);

    if (accessToken && refreshToken) {
      setTokenAndRedirect(accessToken, refreshToken)
        // .then(getUserInfo)
        .then(dispatch(getUser()))
        .then(setAuthentication(true))
        .catch((error) => {
          console.log(error);
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      return <Loading></Loading>;
    }
    if (isError) {
      router.push("/login");
    }
  }, [isError, isLoading]);

  return authentication ? children : null;
}

export default AuthGuardHOC;
