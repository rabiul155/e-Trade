import AuthGuardHOC from "@/components/AuthGuard/AuthGuardHOC";

export default function Layout({ children }) {
  return (
    <>
      <title>eTrade</title>
      <AuthGuardHOC>
        <div className=" mx-auto max-w-screen-xl min-h-screen ">{children}</div>
      </AuthGuardHOC>
    </>
  );
}
