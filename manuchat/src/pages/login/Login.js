import Button from "../../components/Button/Button";
import { ApiUser } from "../../services/API/ApiUser";
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const redirectionToRegister = () => {
        navigate("/register");
    };
    const handleSendData = async (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
        console.log(password);
        try {
            const res = await ApiUser.loginUser(email, password);
            const token = res.token;
            const user = res.userData;
            console.log(token);
            console.log(user);
        } catch (error) {
            alert('no esta funcionando')
        }
    };
    return(
        <>
        <div className="Profile">
            <form onSubmit={(e) => handleSendData(e)}> 
                
                <div>
                    <div>
                        <label>
                            Email: 
                            <input
                                type='email'
                                name='email'
                                placeholder="Escribe aqui tu email"
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: 
                            <input
                                type='password'
                                name='password'
                                placeholder="Password"
                                required />
                        </label>
                    </div>
                </div>
                <Button type="submit" >Entra</Button>
                <Button onClick={()=>redirectionToRegister()} >Registrate</Button>
            </form>
        </div>
        </>
    )
};

export default Login