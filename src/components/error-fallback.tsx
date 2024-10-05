import { Button } from "~/components/ui/button"

export const ErrorFallback = () => (
  <div className="grid h-screen w-screen place-items-center p-4" role="alert">
    <h2 className="text-lg font-semibold">Oops, something went wrong.</h2>
    <Button
      className="mt-4"
      onClick={() => window.location.assign(window.location.origin)}
    >
      Refresh
    </Button>
  </div>
)
