"use client";

import React from "react";
import ProtectedRoute from "@/components/AuthGuard/ProtectedRoute";

function ProtectedLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

export default ProtectedLayout;
