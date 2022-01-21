import Search from "../Search/Search";
import { ApiUser } from "../../services/API/ApiUser";
import { useState } from "react";
import store from '../../services/store/store';
import Button from "../Button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap";
import { AddShowModal } from "../../services/actions/addShowModal/AddShowModal";
import { AddNewContact } from "../../services/actions/addNewContact/AddNewContact"
import 'bootstrap/dist/css/bootstrap.css';

const CreateContact = () => {
    const [Contact, setContact] = useState([]);
    const [Found, setFound] = useState(false);
    const [ModalOpen, setModalOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    
    const handleGetUser = async (email) => {
        try {
            let res = await ApiUser.searchUser(email);
            if (res.length > 0) {
                const newContact = res[0];
                setFound(true);
                setContact(newContact);
            }
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error.messega);
        }
        
    };
    const handleSearch = (e) => {
        e.preventDefault();
        let email = e.target.value;
        handleGetUser(email);
    };
    const handleAddContact = async (e) => {
        e.preventDefault();
        try {
            if (user.id === Contact._id) {
                alert('No puedes agregarte a ti mismo')
            } else {
                await ApiUser.addContact(user.id , Contact._id);
                setFound(false);
                setContact([]);
                setModalOpen(false);
                store.dispatch(AddShowModal(false));
                store.dispatch(AddNewContact(true));
            }
        } catch (error) {
            console.error(error.message);
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            if (error.status === 400) {
                alert('contacto existe');
                setFound(false);
                setContact([]);
            }
            
        }
        
    };
    const handleCloseModal = (e) => {
        e.preventDefault();
        setModalOpen(false);
        store.dispatch(AddShowModal(false));
    };
    
    store.subscribe(()=>{
        setModalOpen(store.getState().showModal);
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
            <ModalHeader toggle={(e) => handleCloseModal(e)}>
                Agregar Contacto
            </ModalHeader>
            <ModalBody>
            <Search
            handleSearch={handleSearch}
            />
            <div>
                {Found ? 
                <div>
                    <p>Usuario: {Contact.name}</p>
                    <p>NickName: {Contact.username}</p>
                    <p>Email: {Contact.email}</p>
                </div>
                : <p>Busca tu contacto por el email</p>
                }
            </div>
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-primary" onClick={(e) => handleAddContact(e)} >Guardar</Button>
                <Button className="btn btn-danger" onClick={(e) => handleCloseModal(e)}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        </>
    )}
export default CreateContact