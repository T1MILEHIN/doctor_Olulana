import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loader from "./components/loader";
const HomeLayout = lazy(()=> import("./layout/homeLayout"));
const Home = lazy(()=> import("./pages/home"));
const About = lazy(()=> import("./pages/about"))
const Blog = lazy(()=> import("./pages/blog"))
import BlogPost from "./pages/blogPost";
import NotFound from "./pages/notFound"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <HomeLayout/>
      </Suspense>
    ),
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader/>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader/>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loader/>}>
            <Blog />
          </Suspense>
        )
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
