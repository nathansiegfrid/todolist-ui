import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "~/components/error-fallback"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60 * 1000, // 1 minute
    },
  },
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
