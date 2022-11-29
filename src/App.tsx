import { Layout } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import MainPage from "./pages/MainPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
