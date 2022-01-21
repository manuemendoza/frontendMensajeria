import { useNavigate } from "react-router";
import Button from "../Button/Button";
import "./NavBar.scss"
import store from "../../services/store/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) =>{
    
    const token = localStorage.getItem('token');
    
    const navigate = useNavigate();
    
    const redirectionToRegister = () => {
        navigate("/register");
    };
    
    const redirectionToLogin = () => {
        navigate("/login");
    };
    
    const redirectionToChat = () => {
        navigate("/chats");
    };
    
    useEffect(()=>{
        if (token) {
            redirectionToChat();
        }
    },[]);

    return(
        <>
        <div className="navbar_conteiner">
            <nav className="navbar">
                <ul className="navbar_link">
                    <li> <Link to="#">Conocenos</Link>
                        <ul className="navbar_ul">
                            <li><Link to="#">Quienes Somos</Link></li>
                            <li><Link to="#">Nuestro Repositorio</Link></li>
                        </ul>
                    </li>
                    <li> <Link to="#">Servicios</Link>
                    {/* @TODO PENSAR QUE MAS PONER */}
                        {/* <ul className="navbar_ul" >
                            <li><Link to="#"></Link></li>
                            <li><Link to="#"></Link></li>
                            <li><Link to="#"></Link></li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="#">Contactanos</Link>
                    </li>
                </ul>
            </nav>
            <div className="navbar_button" >
                <Button className="btn navbar_button-text" onClick={(e) => redirectionToLogin(e)}>login</Button>
                <Button className="btn navbar_button-text" onClick={(e) => redirectionToRegister(e)}>register</Button>
            </div>
        </div>
        </>
    )
};

export default NavBar;