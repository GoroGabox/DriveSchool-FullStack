"use client";
import { redirect, useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  let { user } = useAuthContext();
  const router = useRouter()
  if (!user) {
      return router.push("/login");
}
return children;
};

export default PrivateRoute;
