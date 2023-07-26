import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./app/User/Login";
import { ROUTES } from "./routes/consts";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.USER.LOGIN}
            element={
              <UserProvider>
                <Login />
              </UserProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
