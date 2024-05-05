"use client";

import { useRouter } from "next/navigation";
import React from "react";

function DashboardPage() {
  const router = useRouter();
  router.push("/dashboard/myProduct");

  return <div></div>;
}

export default DashboardPage;
