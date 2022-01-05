import { ApiUser } from "../../services/API/ApiUser";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import imagenLogo from "../../img/logodelado.png"

const CreateUser = () =>{
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    const redirectionToChat = () => {
        navigate("/chat");
    };
    
    useEffect(()=>{
        if (token) {
            redirectionToChat();
        }
    });
    
    const HandleCreateUser = async(e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await ApiUser.createUser(name, surname, email, password);
            console.log('esto es una una respuesta create', res);
            //modificando el error de estado y mensajes de estos mismos tenemos que modificar el localstorage para que no lo meta nulo tanto del login como el crate
            if (res) {
                const login = await ApiUser.loginUser(email, password);
                const token = login.token;
                const user = login.userData;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                if (token.length > 0) { 
                    redirectionToChat();
                } else {   
                    console.log(null);
                };
            }           
        } catch (error) {
            console.log(error.code);
            console.error( error.message);
        }
    };
    return(
        <>
        <div className="container">
        <img src={imagenLogo} alt="Imagen Logo" className='logo_login'/>
        <p className="login_text">Crea una cuenta <span>ó bien<Link to="/login"> incia sesión</Link></span></p>
            <form onSubmit={(e) => HandleCreateUser(e)} className="form">
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Nombre"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder="Escribe aqui tu apellido"
                                    required />
                            </label>
                        </div>
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
                                    placeholder="Escribe aqui tu contraseña"
                                    required />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit" className="login_button" >Registrarte</Button>
            </form>
        </div>
        </>
    )
};

export default CreateUser