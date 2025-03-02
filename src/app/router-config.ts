
import { paths } from "@/config/paths";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const HomePage = lazy(() => import("@/pages/home-page"));
const NotFound = lazy(() => import("@/pages/not-found"));
export const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: paths.home.path,
      Component: HomePage,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);
};

