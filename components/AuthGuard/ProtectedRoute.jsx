"use client";

import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useRouter } from "next/navigation";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const { loading, user } = auth;

  const router = useRouter();

  if (loading) return <Loading></Loading>;

  return user.email ? children : router.push("/login");
}

export default ProtectedRoute;
