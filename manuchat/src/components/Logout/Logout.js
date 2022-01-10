import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();
    // const token = localStorage.getItem("token");
    // esto es para obligar al cliente que siempre este loguado  para estar en chats
    // useEffect(() => {
    //     if (!token) {
    //         navigate("/");
    //     }
    // })
    const hanlendDeleteToken =(r) => {
        r.preventDefault();
        localStorage.setItem("token",[])
        localStorage.setItem("user",[])
        navigate("/")
    }
    return(
        <Button onClick={ (r) => hanlendDeleteToken(r) }>Cerrar sesión</Button>
    )
};

export default Logout