import { useEffect, useState } from "react";
import { ApiUser } from "../../services/API/ApiUser";
import store from "../../services/store/store";
import { AddDeleteContact } from '../../services/actions/addDeleteContact/AddDeleteContact';
import Button from "../Button/Button";
import { ApiChat } from "../../services/API/ApiChat";
import { ApiMessage } from "../../services/API/ApiMessage";
import { useNavigate } from 'react-router';



const UserCard = (props) => {
    const { contact } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    const [Card, setCard] = useState([]);
    const id = contact.id;
    const navigate = useNavigate();

    const redirectionToChat = () => {
        navigate("/chats");
    };
    const getUser = async (id) =>{
        try {
            const res = await ApiUser.getUser(id);
            setCard(res);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreateMessage = async (e) => {
        e.preventDefault();
        const title = null;
        const userIds = [id];
        const text = null;
        try {
            const resChat = await ApiChat.createChat(title, userIds);
            console.log('esto es el chart ', resChat);
            if (resChat._id) {
                const resMessage = await ApiMessage.createMessage(text, resChat._id);
                console.log('este es mensaje ', resMessage);
                if (resMessage) {
                    redirectionToChat();
                }
            }
        } catch (error) {
            if (error.status === 401) {
                localStorage.setItem('token', []);
            }
            console.error(error);
        }
    };

    const handleModalDelete = (e) =>{
        e.preventDefault();
        store.dispatch(AddDeleteContact(true));
    }

    useEffect(() => {
        getUser(id);
    },[id]);

    return(
        <div className="main_prueba--contenido">
            <h1>Perfil del Contacto</h1>
            <h5>NickName: {Card.username}</h5>
            <p>Nombre: {Card.name} Apellido: {Card.surname}</p>
            <p>email: {Card.email}</p>
            <Button className="btn btn-info" onClick={(e) => handleCreateMessage(e)} >Iniciar Conversacion</Button>
            <Button className="btn btn-danger" onClick={(e) => handleModalDelete(e)} >Borrar Contacto</Button>
        </div>
    )
};

export default UserCard;