import Search from "../Search/Search";
import { ApiUser } from "../../services/API/ApiUser";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import store from "../../services/store/store";
import { AddDeleteContact } from "../../services/actions/addDeleteContact/AddDeleteContact";
import { AddIdContact } from "../../services/actions/addIdContact/AddIdContact";
import { AddShowCard } from "../../services/actions/addShowCard/AddShowCard";
import { AddNewContact } from "../../services/actions/addNewContact/AddNewContact";


const DeleteContact = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const [ModalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [IdContact, setIdContact] = useState([]);
    const contactId = IdContact.id
    
    store.subscribe(() =>{
        setModalDeleteOpen(store.getState().deleteContact);
        setIdContact(store.getState().idContact);
    })

    const handleDeleteContact = async (e) => {
        e.preventDefault();
        try {
            console.log('usuario ', id );
            console.log('contacto ', contactId);
            await ApiUser.deleteContact(id, contactId);
            //aqui tengo que poner un aler de que esta borrado
            setModalDeleteOpen(false);
            store.dispatch(AddDeleteContact(false));
            store.dispatch(AddIdContact([]));
            store.dispatch(AddShowCard(false));
            store.dispatch(AddNewContact(true));
            
        } catch (error) {
            console.error(error);
        }
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        setModalDeleteOpen(false);
        store.dispatch(AddDeleteContact(false));
    };

    return(
        <Modal
        centered
        fullscreen="xl"
        size="xl"
        isOpen={ModalDeleteOpen}
        toggle={(e) => handleCloseModal(e)}
        >
            <ModalHeader toggle={(e) => handleCloseModal(e)}>
                Eliminar Contacto
            </ModalHeader>
            <ModalBody>
                <p>¿Desea realmente borrar su contacto?</p>
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-primary" onClick={(e) => handleDeleteContact(e)}>Aceptar</Button>
                <Button className="btn btn-danger" onClick={(e) => handleCloseModal(e)}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        )
};

export default DeleteContact;