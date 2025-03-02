import { createAppRouter } from "./router-config";
import { useMemo } from "react";
import { RouterProvider } from "react-router";

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
};
