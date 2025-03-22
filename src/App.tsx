import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { TOAST_OPTIONS } from "./app/config/constants";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster toastOptions={TOAST_OPTIONS} />
    </QueryClientProvider>
  );
}

export default App;
