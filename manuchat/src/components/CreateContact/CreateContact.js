import Search from "../Search/Search";
import { ApiUser } from "../../services/API/ApiUser";
import { useState, useEffect } from "react";
import store from '../../services/store/store';
import Button from "../Button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const CreateContact = () => {
    const [Contact, setContact] = useState([]);
    const [Found, setFound] = useState(false);
    const [ModalOpen, setModalOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    
    const handleGetUser = async (email) => {
        try {
            let res = await ApiUser.getUser(email);
            if (res.length > 0) {
                const newContact = res[0];
                setFound(true);
                setContact(newContact);
            }
        } catch (error) {
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
            await ApiUser.addContact(user.id , Contact._id)
            setFound(false);
            setContact([]);
        } catch (error) {
            console.error(error.messega);
        }
        
    };
    const handleCloseModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
        console.log('hola funciono');
    };
    useEffect(() => {
        store.subscribe(()=>{
            setModalOpen(store.getState().visibility);
        });
    }, []);
    return(
        <>
        <Modal
        centered
        fullscreen="xl"
        size="xl"
        isOpen={!ModalOpen}
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