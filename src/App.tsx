import { Routes, Route } from "react-router-dom";
import "./App.css";

import SignIn from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import { useTypedSelector } from "./hooks/useTypedSelector";
import DashboardLayout from "./container/dashboardLayout";
import DefaultPage from "./pages/defaultPage";
import NotFound from "./pages/notFound";
import AllUsers from "./pages/users/allUsers";
import Register from "./pages/auth/register";

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          (user.role === "Administrator" && (
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DefaultPage />} />
            <Route path="users" element={<AllUsers />} />
            <Route path="register" element={<Register />} />
          </Route>
          )) (user.role === "User" && (
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DefaultPage />} />
            <Route path="users" element={<AllUsers />} />
          </Route>
          ))
        </>
      )}

      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
