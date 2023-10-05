import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Container from "./Container";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/page/:page",
      element: <Container />,
    },
    {
      path: "/",
      element: <Container />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
