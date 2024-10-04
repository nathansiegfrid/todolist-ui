import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "*",
    lazy: async () => {
      const { NotFoundRoute } = await import("./routes/not-found")
      return { Component: NotFoundRoute }
    },
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
