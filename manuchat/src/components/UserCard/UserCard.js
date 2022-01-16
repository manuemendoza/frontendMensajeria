import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import store from "../../services/store/store";
import { AddDeleteContact } from '../../services/actions/addDeleteContact/AddDeleteContact';
import Button from "../Button/Button";

const UserCard = (props) => {
    const { contact } = props;
    const [Card, setCard] = useState([])
    const id = contact.id;
    
    const getUser = async (id) =>{
        try {
            const res = await ApiUser.getUser(id);
            setCard(res);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModalDelete = (e) =>{
        e.preventDefault()
        store.dispatch(AddDeleteContact(true));
    }

    useEffect(() => {
        getUser(id);
    },[id]);

    return(
        <div className="main_prueba--contenido">
            <p>funciona porfavor</p>
            <h5>NickName: {Card.username}</h5>
            <p>Nombre: {Card.name} Apellido: {Card.surname}</p>
            <p>email: {Card.email}</p>
            <Button className="btn btn-info" >Iniciar Conversacion</Button>
            <Button className="btn btn-danger" onClick={(e) => handleModalDelete(e)} >Borrar Contacto</Button>
        </div>
    )
};

export default UserCard;