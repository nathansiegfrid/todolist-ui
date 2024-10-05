import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => {
      const { NotFoundPage } = await import("./pages/not-found")
      return { Component: NotFoundPage }
    },
  },
])

export const AppRouter = () => <RouterProvider router={router} />
