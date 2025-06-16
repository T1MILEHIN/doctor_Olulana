import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layout/homeLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";
import NotFound from "./pages/notFound"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:slug",
        element: <BlogPost />
      }
    ]
  },
]);



function App() {
  return <RouterProvider router={router} />
}

export default App;
