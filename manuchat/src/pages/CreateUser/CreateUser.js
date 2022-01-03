import { ApiUser } from "../../services/API/ApiUser";
import Button from "../../components/Button/Button";

const CreateUser = () =>{

    const HandleCreateUser = async(e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await ApiUser.createUser(name, surname, email, password);
            console.log(res);
        } catch (error) {
            console.log('no esta funcionando');
        }
    };
    return(
        <>
            <form onSubmit={(e) => HandleCreateUser(e)} className="form">
                    <legend className="legend">Por Favor Rellene todos los campos</legend>
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
                    <Button type="onSubmit">Registrarte</Button>
            </form>
        </>
    )
};

export default CreateUser