import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

//main layout of app
const App = () => {
    return <RouterProvider router={appRouter}/>
};

export default App;
