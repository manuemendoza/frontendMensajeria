import Button from "../Button/Button";
import { ApiUser } from "../../services/API/ApiUser";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./UpdateUser.scss"
import store from "../../services/store/store";
import { AddShowModalUpDate } from "../../services/actions/addShowModalUpDate/AddShowModalUpDate";

const UpdateUser = (props) => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const id = userLocal.id
    const [ModalOpen, setModalOpen] = useState(false);
    const [Name, setName] = useState(userLocal.name);
    const [Surname, setSurname] = useState(userLocal.surname);
    const [Username, setUsername] = useState(userLocal.username);
    const [Email, setEmail] = useState(userLocal.email);
    const [Password, setPassword] = useState();

    const handleUpdateUser = async (e) =>{
        e.preventDefault()
        try {
            const res = await ApiUser.UpDateUser(id, Name, Surname, Username, Email, Password);
            console.log("esta es la respueta al cambiar ", res);
            localStorage.setItem('user', JSON.stringify(res));
            setModalOpen(false);
            store.dispatch(AddShowModalUpDate(false));
        } catch (error) {
            console.log(error);
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
        }
    };
    const handleCloseModal = (e) => {
        e.preventDefault();
        setModalOpen(false);
        store.dispatch(AddShowModalUpDate(false));
    };
    store.subscribe(()=>{
        setModalOpen(store.getState().showModalUpDate);
    });
    return(
        <>
        <Modal
        centered
        fullscreen="lg"
        size="lg"
        isOpen={ModalOpen}
        toggle={(e) => handleCloseModal(e)}
        >
            <ModalHeader>
                Actualiza tu Perfil de Usuario
            </ModalHeader>
            <ModalBody>
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
                                        className="input_update"
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
                                        className="input_update"
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
                                        className="input_update"
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
                                        disabled
                                        className="input_update"
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
                                        className="input_update"
                                    />
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-primary" onClick={(e) => handleUpdateUser(e)} >Guardar</Button>
                <Button className="btn btn-danger" onClick={(e) => handleCloseModal(e)}>Cancelar</Button>
            </ModalFooter>
        </Modal>         
        </>
    )
};

export default UpdateUser