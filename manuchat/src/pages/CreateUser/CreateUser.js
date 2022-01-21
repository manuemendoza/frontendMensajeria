import { ApiUser } from "../../services/API/ApiUser";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import imagenLogo from "../../img/logodelado.png"

const CreateUser = () =>{
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    const redirectionToUser = () => {
        navigate("/users");
    };
    
    useEffect(()=>{
        if (token) {
            redirectionToUser();
        } 
    });
    
    const HandleCreateUser = async(e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        try {
            const res = await ApiUser.createUser(name, surname, username, email, password);
            if (res) {
                const login = await ApiUser.loginUser(email, password);
                const token = login.token;
                const user = login.userData;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                if (token.length > 0) { 
                    redirectionToUser();
                }
            }           
        } catch (error) {
            console.log(error.message);
            console.log(error.code);
            console.error( error.message);
        }
    };
    return(
        <>
        <div className="container__login">
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
                                placeholder="Apellido"
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type='text'
                                name='username'
                                placeholder="Nick Name"
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type='email'
                                name='email'
                                placeholder="Email"
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type='password'
                                name='password'
                                placeholder="Contraseña"
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