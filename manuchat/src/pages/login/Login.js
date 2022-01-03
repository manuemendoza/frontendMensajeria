import "./Login.scss"
import Button from "../../components/button/Button";
import { ApiUser } from "../../services/API/ApiUser";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imagenLogo from '../../img/ManudChat_logo_p.png';

const Login = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    const redirectionToClient = () => {
        navigate("/chat");
    };
    
    useEffect(()=>{
        if (token) {
            redirectionToClient();
        }
    },[]);

    const handleSendData = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await ApiUser.loginUser(email, password);
            const token = res.token;
            const user = res.userData;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            if (token.length > 0) { 
                redirectionToClient();
            } else {   
                console.log(null);
            };
        } catch (error) {
            alert(error, ' no esta funcionando');
        }
    };
    
    return(
        <>
        <div className="container">
            <img src={imagenLogo} alt="Imagen Logo" className='logo_login'/>
            <h1 className="login_title">Iniciar Sesión</h1>
            <form onSubmit={(e) => handleSendData(e)}> 
                <div>
                    <div>
                        <label>
                            <input
                                type='email'
                                name='email'
                                placeholder="Escribe aqui tu email"
                                required />
                        </label>
                    </div>
                    <div>
                        <label> 
                            <input
                                type='password'
                                name='password'
                                placeholder="Password"
                                required />
                        </label>
                    </div>
                </div>
                <p className="login_text">¿Aun no tienes Cuenta?<span><Link to="/register">Cree una</Link></span></p>
                <Button type="submit" className="login_button" >Entra</Button>
            </form>
        </div>
        </>
    )
};

export default Login