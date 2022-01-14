import Button from "../Button/Button";
import { ApiUser } from "../../services/API/ApiUser";
import { useState } from "react";

const UpdateUser = (props) => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const id = userLocal.id
    const [Name, setName] = useState(userLocal.name);
    const [Surname, setSurname] = useState(userLocal.surname);
    const [Username, setUsername] = useState(userLocal.username);
    const [Email, setEmail] = useState(userLocal.email);
    const [Password, setPassword] = useState([]);

    const handleUpdateUser = async (e) =>{
        e.preventDefault();
        try {
            const res = await ApiUser.UpDateUser(id, Name, Surname, Username, Email, Password);
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
                                    value={Name}
                                    onChange={e =>setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    value={Surname}
                                    onChange={e =>setSurname(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='username'
                                    value={Username}
                                    onChange={e =>setUsername(e.target.value)}
                                    autoComplete="off"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    value={Email}
                                    onChange={e =>setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    value={Password}
                                    onChange={e =>setPassword(e.target.value)}
                                    autoComplete="off"
                                    placeholder="Password"
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