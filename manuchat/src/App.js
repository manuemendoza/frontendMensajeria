import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/register" element={<CreateUser/>} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
