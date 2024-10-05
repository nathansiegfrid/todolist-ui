import { useNavigate } from "react-router-dom"

import { Button } from "~/components/ui/button"

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="grid h-screen w-screen place-items-center overflow-auto p-4">
      <div className="text-center font-semibold">
        <div className="text-6xl">404</div>
        <div className="mt-4 text-2xl">Page Not Found</div>
        <p className="mt-2">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Button
          className="mt-6"
          onClick={() => navigate("/", { replace: true })}
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}
