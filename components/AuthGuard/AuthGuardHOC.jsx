"use client";

import APIKit from "@/common/helpers/APIKit";
import { setTokenAndRedirect } from "@/common/helpers/HTTPKit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/common/helpers/KeyChain";
import { setUser } from "@/redux/authSlice/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { setShow } from "@/redux/modalSlice/modalSlice";
import Modal from "../modal/Modal";

function AuthGuardHOC({ children }) {
  const [authentication, setAuthentication] = useState(false);

  const auth = useSelector((state) => state.auth);
  const { loading, isError, isSuccess } = auth;
  const modal = useSelector((state) => state.modal);
  const router = useRouter();
  const dispatch = useDispatch();

  const setShowModal = (payload) => {
    dispatch(setShow(payload));
  };

  const sessionExpiredModal = (
    <Modal show={modal.show} setShow={setShowModal}>
      <p>session expired reload </p>
    </Modal>
  );

  const getUserInfo = () => {
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
      setAuthentication(true);
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
      dispatch(setShow(true));
      // router.push("/login");
    };
    return APIKit.getUserInfo().then(onSuccess).catch(onError);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    console.log("access token ", accessToken);

    if (accessToken && refreshToken) {
      setTokenAndRedirect(accessToken, refreshToken)
        .then(getUserInfo)
        // .then(() => dispatch(getUser()))
        .catch((error) => {
          console.log(error);
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return authentication ? children : sessionExpiredModal;
}

export default AuthGuardHOC;
