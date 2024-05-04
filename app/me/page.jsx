"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Me() {
  const router = useRouter();
  useEffect(() => {
    router.push("me/products");
  }, []);
  return <></>;
}

export default Me;
