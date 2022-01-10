import Button from "../Button/Button";
import { ApiUser } from "../../services/API/ApiUser";

const UpdateUser = (props) => {
    const { id, name, surname, username, email, contacts} = props
    
    const handleUpdateUser = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await ApiUser.UpDateUser(id, name, surname, username, email, password);
            console.log("esta es la respueta al cambiar ",res);
            localStorage.setItem('user', JSON.stringify(res));
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <div className="container">
            <form onSubmit={(e) => handleUpdateUser(e)} className="form" >
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder={name}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder={surname}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='username'
                                    placeholder={username}
                                    autoComplete="NickName"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder={email}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="password"
                                />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit" className="login_button" >Actualizar</Button>
            </form>
        </div>
        </>
    )
};

export default UpdateUser