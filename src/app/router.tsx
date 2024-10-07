import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/login",
    lazy: async () => {
      const { LoginPage } = await import("./pages/login")
      return { Component: LoginPage }
    },
  },
  {
    path: "*",
    lazy: async () => {
      const { NotFoundPage } = await import("./pages/not-found")
      return { Component: NotFoundPage }
    },
  },
])

export const AppRouter = () => <RouterProvider router={router} />
