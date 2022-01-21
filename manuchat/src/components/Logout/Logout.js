import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Logout.scss"
// import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();
    // const token = localStorage.getItem("token");

    const hanlendDeleteToken =(r) => {
        r.preventDefault();
        localStorage.setItem("token",'')
        localStorage.setItem("user",'')
        navigate("/"); //login
    };

    // useEffect(() => {
    //     if (!token || token === []) {
    //         navigate("/"); //login
    //     }
    // });

    return(
        <Button onClick={ (r) => hanlendDeleteToken(r) } className="logout_button" >Cerrar sesión</Button>
    )
};

export default Logout