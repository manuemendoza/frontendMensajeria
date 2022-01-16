import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
import HomePage from "./pages/HomePage/HomePage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Login from "./pages/login/Login";
import ChatPageUser from "./pages/ChatPageUser/ChatPageUser";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/register" element={<CreateUser/>} exact/>
        <Route path="/chats" element={<ChatPage/>} exact/>
        <Route path="/users" element={<ChatPageUser/>} exact/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
