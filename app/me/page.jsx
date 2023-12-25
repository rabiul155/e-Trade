import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("me/products");
  }, []);
  return <></>;
}

export default Page;
