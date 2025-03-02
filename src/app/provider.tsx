// App provider wrap all global providers

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-gray-100">{children}</main>
    </QueryClientProvider>
  );
}
