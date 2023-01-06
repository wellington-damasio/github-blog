import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthorInfoContextProvider } from "./contexts/AuthorInfoContext";
import { AuthorPostsContextProvider } from "./contexts/AuthorPostsContext";
import { Home } from "./Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Post, postLoader } from "./Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
]);

export const App = () => {
  return (
    <AuthorInfoContextProvider>
      <AuthorPostsContextProvider>
        <RouterProvider router={router} />
      </AuthorPostsContextProvider>
    </AuthorInfoContextProvider>
  );
};
