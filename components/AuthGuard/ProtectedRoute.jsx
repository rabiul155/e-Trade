"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useRouter } from "next/navigation";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const { loading, user } = auth;
  const router = useRouter();

  useEffect(() => {
    if (!user.email) {
      router.replace("/login");
    }
  }, [user.email]);

  if (loading) return <Loading></Loading>;

  return user.email ? children : null;
}

export default ProtectedRoute;
