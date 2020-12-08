import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const Providers = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );
};
