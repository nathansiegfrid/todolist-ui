import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ErrorBoundary } from "react-error-boundary"

import { ErrorFallback } from "~/components/error-fallback"
import { Toaster } from "~/components/ui/toaster"
import { queryConfig } from "~/lib/react-query"

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
})

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      {children}
      <Toaster />
    </QueryClientProvider>
  </ErrorBoundary>
)
