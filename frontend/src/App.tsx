import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { RootError } from "./routes/root.tsx";
// NOTE: make sure to add errorBoundary to all routes that throw error from loader and actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RootError />,
  },
  // {
  //   element: <MainLayout />,
  //   errorElement: <MainLayoutError />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //   ],
  // },
]);

export default function App() {
  // console.log(import.meta.env.VITE_PUBLIC_PROJECT_ID);
  return (
    <div>
      {/* <RootLayout> */}
      <RouterProvider router={router} />
    </div>
  );
}
