import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./app/User/Login";
import { ROUTES } from "./routes/consts";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserAuthProvider } from "./context/UserAuthContext";
import { UserProvider } from "./context/UsersContext";
import { UserList } from "./app/components/UserList";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.USER.LOGIN}
            element={
              <UserAuthProvider>
                <Login />
              </UserAuthProvider>
            }
          />
          <Route
            path={ROUTES.USER.ALLDATAS}
            element={
              <UserProvider>
                <UserList />
              </UserProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
