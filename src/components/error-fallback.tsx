import { Button } from "~/components/ui/button"

function ErrorFallback() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Oops, something went wrong.</h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}

export default ErrorFallback
