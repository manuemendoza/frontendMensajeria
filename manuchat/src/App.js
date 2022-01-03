import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/register" element={<CreateUser/>} exact/>
        <Route path="/chat" element={<Dashboard/>} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
