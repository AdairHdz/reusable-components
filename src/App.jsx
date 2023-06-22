import { Layout } from "./components/layout/Layout";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ComponentsShowcase } from "./pages/ComponentsShowcase";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {AuthContextProvider} from "./context/AuthContext";
import "./App.css";
import { AuthRouter } from "./routes/AuthRouter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  // const router = createBrowserRouter(routes)
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <ComponentsShowcase />
        </Layout>
      ),
      children: [
        {
          index: true,
          element: (<p></p>)
        }
      ]
    },
    {
      path: "/auth",
      element: (
        <AuthRouter
          roles={["Administrador"]}
        />
      ),
      children: [
        {
          index: true,
          path: "a",
          element: (
            <p>
              HOLA
            </p>
          )
        }
      ]
    }
  ])
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
