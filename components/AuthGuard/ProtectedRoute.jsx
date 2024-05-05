"use client";

import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useRouter } from "next/navigation";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const { loading, user } = auth;
  console.log("hello from protected route");

  const router = useRouter();

  if (loading) return <Loading></Loading>;

  if (!user.email) {
    router.push("/login");
  }

  return user.email ? children : null;
}

export default ProtectedRoute;
