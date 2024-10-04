import { useNavigate } from "react-router-dom"
import { Button } from "~/components/ui/button"

export function NotFoundRoute() {
  const navigate = useNavigate()

  return (
    <div className="grid h-screen w-screen place-items-center overflow-auto p-4">
      <div className="flex flex-col items-center text-center font-semibold">
        <div className="mb-4 text-6xl">404</div>
        <div className="mb-2 text-2xl">Page Not Found</div>
        <p className="mb-6">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/", { replace: true })}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}
