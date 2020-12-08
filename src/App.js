import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import UserList from "./pages/UserList";
import UpdateUser from "./pages/UpdateUser";
import CreateUser from "./pages/CreateUser";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/new" element={<CreateUser />} />
      <Route path="/users/:id/edit" element={<UpdateUser />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <AppRoutes />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
