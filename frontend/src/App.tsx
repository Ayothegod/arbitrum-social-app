import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Index, { RootError, Loader } from "./routes/index.tsx";
import Forum from "./routes/forum.tsx";
import Post from "./routes/singlePost.tsx";
import AllComments from "./routes/comments.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <RootError />,
  },
  {
    path: "/forum",
    element: <Forum />,
    errorElement: <RootError />,
    loader: Loader,
  },
  {
    path: "/comments",
    element: <AllComments />,
    errorElement: <RootError />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
    errorElement: <RootError />,
    loader: async ({ params }) => {
      return params.id;
    },
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
